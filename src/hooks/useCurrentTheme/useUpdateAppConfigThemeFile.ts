import getAppPath from "@/utils/appPath.ts";
import useReadAppConfigThemeFile from "@/hooks/useCurrentTheme/useReadAppConfigThemeFile.ts";

/**
 * 更新配置表中的用户设置信息
 * @param {string} updateKey 键
 * @param {any} updateValues 值
 * @param {function} callback 回调函数
 */
const useUpdateAppConfigThemeFile = () => {
  const readAppConfigThemeFile = useReadAppConfigThemeFile();
  return (updateKey: string, updateValues: object, callback?: () => void) => {
    getAppPath().then((appPath: string) => {
      const jsonPath = appPath+'\\appConfig\\theme.config.json';
      readAppConfigThemeFile().then((values: { [key: string]: string }) => {
        if (values && !!Object.keys(values).length) {
          const nextConfigContent = {
            ...values,
            [`${updateKey}`]: updateValues,
          };
          window.electron.ipcRenderer.send('fileWrite', jsonPath, nextConfigContent, 'utf-8');
          window.electron.ipcRenderer.on('fileWriteReply', (_, data: string) => {
            console.log(data);
            callback && callback();
          })
        }
      });
    });
  };
}

export default useUpdateAppConfigThemeFile;