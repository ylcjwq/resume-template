import getAppPath from '@/utils/appPath';

/**
 * @description 读取全局配置文件的内容
 */
export function useReadGlobalConfigFile() {
  return () => {
    return new Promise((resolve: (values: { [key: string]: string }) => void) => {
      getAppPath().then((appPath: string) => {
        const jsonPath = appPath+'\\global.config.json';
        window.electron.ipcRenderer.send('fileRead', jsonPath, 'utf-8');
        window.electron.ipcRenderer.on('fileReadReply', (_, data: string) => {
          console.log(JSON.parse(data))
          resolve(JSON.parse(data));
          window.electron.ipcRenderer.removeListener('fileReadReply')
        })
      });
    });
  };
}

/**
 * @description 修改配置文件的内容
 * @param {string} updateKey 键
 * @param {any} updateValues 值
 * @param {function} callback 回调函数
 */
export function useUpdateGlobalConfigFile() {
  const readGlobalConfigFile = useReadGlobalConfigFile();
  return (updateKey: string, updateValues: string, callback?: () => void) => {
    getAppPath().then((appPath: string) => {
      const jsonPath = appPath+'\\global.config.json';
      readGlobalConfigFile().then((values: { [key: string]: string }) => {
        if (values && !!Object.keys(values).length) {
          const nextConfigContent = {
            ...values,
            [`${updateKey}`]: updateValues,
          };
          window.electron.ipcRenderer.send('fileWrite', jsonPath, JSON.stringify(nextConfigContent), 'utf-8');
          window.electron.ipcRenderer.on('fileWriteReply', (_, data: string) => {
            console.log(data);
            callback && callback();
          })
        }
      });
    });
  };
}
