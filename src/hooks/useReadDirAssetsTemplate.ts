import getAppPath from '@/utils/appPath';
import { useDispatch } from 'react-redux';
import {createUID, removeSameObject} from '@/utils';
import {setTemplateList, setSelectTemplate} from '@/store/modules/templateModel.ts'

const useReadDirAssetsTemplate = () => {
  const dispatch = useDispatch();
  const templateList: TSTemplate.Item[] = [];
  let listener: (event: any, base64URL: string) => void;

  return () => {
    getAppPath().then((appPath: string) => {
      console.log(appPath);
      // 读取图片文件
      window.electron.ipcRenderer.send('fileReadDir', `${appPath}/src/assets/template`);
      window.electron.ipcRenderer.on('fileReadDirReply', async (_, files) => {
        if (files.length > 0) {
          let processedFiles = 0;
          listener = (_, base64URL) => {
            console.log(base64URL);
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
              const list = removeSameObject(templateList,'templateName')
              dispatch(setTemplateList(list));
              dispatch(setSelectTemplate(list[0]));
            }
          };

          for (const fileName of files) {
            // 图片转为base64
            window.electron.ipcRenderer.send('fileRead', `${appPath}/src/assets/template/${fileName}`, 'base64');
            window.electron.ipcRenderer.on('fileReadReply',  listener);
          }
        }
      });
    });
  };
}

export default useReadDirAssetsTemplate;
