import getAppPath from "@/utils/appPath.ts";

/**
 * 读取配置文件的内容
 */
const useReadAppConfigThemeFile = () => {
  return () => {
    return new Promise((resolve: (values: { [key: string]: string }) => void, reject: (value: Error) => void) => {
      getAppPath().then((appPath: string) => {
        const jsonPath = appPath+'\\theme.config.json';
        window.electron.ipcRenderer.send('hasFile',jsonPath);
        window.electron.ipcRenderer.on('hasFileReply',(_, arg: string) => {
          if (arg) {
            window.electron.ipcRenderer.send('fileRead', jsonPath, 'utf-8');
            window.electron.ipcRenderer.on('fileReadReply', (_, data: string) => {
              console.log(JSON.parse(data))
              resolve(JSON.parse(data));
              window.electron.ipcRenderer.removeAllListeners('fileReadReply');
            })
          } else {
            reject(new Error('配置文件不存在'));
          }
          window.electron.ipcRenderer.removeAllListeners('hasFileReply');
        })
      });
    });
  };
}

export default useReadAppConfigThemeFile;