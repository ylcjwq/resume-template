import getAppPath from '@/utils/appPath';
import { useDispatch } from 'react-redux';
import {createUID} from '@/utils';
import {setTemplateList, setSelectTemplate} from '@/store/modules/templateModel.ts'
import IpcRendererEvent = Electron.IpcRendererEvent;

/**
 * 初始化简历模板图片
 */
const useReadDirAssetsTemplate = () => {
  const dispatch = useDispatch();
  const templateList: TSTemplate.Item[] = [];
  let listener: (event: IpcRendererEvent, base64URL: string) => void;

  return () => {
    getAppPath().then((appPath: string) => {
      console.log(appPath);
      // 读取图片文件
      window.electron.ipcRenderer.send('fileReadDir', `${appPath}/src/assets/template`);
      window.electron.ipcRenderer.on('fileReadDirReply', async (_, files) => {
        if (files.length > 0) {
          let processedFiles = 0;
          listener = (_, base64URL) => {
            const num = (processedFiles + 1) % files.length
            if(num === 0) {
              templateList.push({
                templateName: files[(processedFiles + 1) / files.length - 1],
                templateId: createUID(),
                templateCover: `data:image/png;base64,${base64URL}`,
              });
            }
            processedFiles++;
            if (processedFiles === files.length * 2) {
              dispatch(setTemplateList(templateList));
              dispatch(setSelectTemplate(templateList[0]));
              window.electron.ipcRenderer.removeAllListeners('fileReadDirReply');
              window.electron.ipcRenderer.removeAllListeners('fileReadImgReply');
            }
          };

          for (const fileName of files) {
            // 图片转为base64
            window.electron.ipcRenderer.send('fileReadImg', `${appPath}/src/assets/template/${fileName}`, 'base64');
            window.electron.ipcRenderer.on('fileReadImgReply',  listener);
          }
        }
      });
    });
  };
}

export default useReadDirAssetsTemplate;
