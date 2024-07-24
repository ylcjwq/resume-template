import style from './index.module.scss'
import { useNavigate } from 'react-router'
import Button from '@/components/Button'
import {useSelector} from "react-redux";
import {State} from "@/type/storeState.ts";
import toPrintPdf from "@/utils/htmlToPDF.ts";
import { createUID } from '@/utils';
import { intToDateString } from '@/utils/time';
import getAppPath from '@/utils/appPath';
import { useReadGlobalConfigFile, useUpdateGlobalConfigFile } from '@/hooks/useGlobalConfigActionHooks';
import {useState} from "react";
import Modal from '@/components/Modal';

const ResumeAction = () => {

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const base: TSResume.Base = useSelector((state: State) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: State) => state.resumeModel.work);
  const resume = useSelector((state: State) => state.resumeModel);
  const readAppConfigThemeFile = useReadGlobalConfigFile();
  const updateGlobalConfigFile = useUpdateGlobalConfigFile();

  // 存储数据json
  const saveResumeJson = (resumeSavePath: string) => {
    const date = intToDateString(new Date().valueOf(), '_');
    const prefix = `${date}_${base?.username}_${work?.job}_${createUID()}.json`;
    // 如果路径中不存在 resumeCache 文件夹，则默认创建此文件夹
    if (resumeSavePath && resumeSavePath.search('resumeCache') > -1) {
      window.electron.ipcRenderer.send('fileWrite', `${resumeSavePath}/${prefix}`, JSON.stringify(resume), 'utf-8');
      window.electron.ipcRenderer.on('fileWriteReply', (_, data: string) => {
        console.log(data);
        window.electron.ipcRenderer.removeAllListeners('fileWriteReply');
      })
    } else {
      window.electron.ipcRenderer.send('mkdirDir', `${resumeSavePath}/${prefix}`);
      window.electron.ipcRenderer.on('mkdirDirReply', (_, path: string) => {
        console.log(path);
        if (path) {
          window.electron.ipcRenderer.send('fileWrite', `${path}/${prefix}`, JSON.stringify(resume), 'utf-8');
          window.electron.ipcRenderer.on('fileWriteReply', (_, data: string) => {
            console.log(data);
            window.electron.ipcRenderer.removeAllListeners('fileWriteReply');
          })
        } else {
          new Error('创建文件夹失败！')
        }
        window.electron.ipcRenderer.removeAllListeners('mkdirDirReply');
      })
    }
  };

  // 导出PDF
  const exportPdf = () => {
    toPrintPdf(`${base?.username}+${work?.job}简历`);
    setShowModal(false);
    readAppConfigThemeFile().then((value: { [key: string]: string }) => {
      if (value?.resumeSavePath) {
        saveResumeJson(value?.resumeSavePath);
      } else {
        // 不存在默认路径，则设置默认路径并更新文件内容
        getAppPath().then((appPath: string) => {
          updateGlobalConfigFile('resumeSavePath', `${appPath}\\resumeCache`);
          saveResumeJson(`${appPath}\\resumeCache`);
        });
      }
    });
  };

  return (
    <div className={style.actions}>
      <div className={style.back} onClick={() => navigate('/')}>返回</div>
      <Button size="middle" className={style.exportBtn} onClick={() => setShowModal(true)}>导出PDF</Button>
      {showModal && (
        <Modal.Confirm
          title="确定要打印简历吗？"
          description="请确保信息的正确"
          config={{
            cancelBtn: {
              isShow: true,
              callback: () => setShowModal(false),
            },
            submitBtn: {
              isShow: true,
              callback: exportPdf,
            },
          }}
        />
      )}
    </div>
  )
}
export default ResumeAction;