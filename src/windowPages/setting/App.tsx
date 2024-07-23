import { useState } from 'react';
import style from './index.module.scss'
import {useReadGlobalConfigFile, useUpdateGlobalConfigFile} from "@/hooks/useGlobalConfigActionHooks.ts";
import useMount from "@/hooks/useMount.ts";
import getAppPath from "@/utils/appPath.ts";

const Setting = () => {
  const [resumeSavePath, setResumeSavePath] = useState('');
  const readAppConfigThemeFile = useReadGlobalConfigFile();
  const updateGlobalConfigFile = useUpdateGlobalConfigFile();

  useMount(() => {
    readAppConfigThemeFile().then((value: { [key: string]: string }) => {
      if (value?.resumeSavePath) {
        setResumeSavePath(value?.resumeSavePath);
      } else {
        // 不存在默认路径，则设置默认路径并更新文件内容
        getAppPath().then((appPath: string) => {
          setResumeSavePath(`${appPath}\\resumeCache`);
          updateGlobalConfigFile('resumeSavePath', `${appPath}\\resumeCache`);
        });
      }
    });
  });

  const onChangePath = () => {
    window.electron.ipcRenderer.send('open-save-resume-path', '');
    window.electron.ipcRenderer.on('save-resume-path-reply', (_, arg: string) => {
      if(arg) {
        setResumeSavePath(arg);
        updateGlobalConfigFile('resumeSavePath', arg);
      } else {
        new Error('自定义存储路径失败！')
      }
      window.electron.ipcRenderer.removeAllListeners('save-resume-path-reply');
    })
  };
  return (
    <div className={style.container}>
      <p className={style.label}>修改简历数据储存路径</p>
      <div className={style.input}>
        <div className={style.value}>{resumeSavePath || '请选择存储路'}</div>
        <div className={style.updateBtn} onClick={onChangePath}>更改路径</div>
      </div>
    </div>
  );
}

export default Setting;