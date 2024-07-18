import getAppPath from '@/utils/appPath';

const useReadDirAssetsTemplate = () => {
  return () => {
    // 1. 先获取应用地址
    getAppPath().then((appPath: string) => {
      console.log(appPath);
      // 2. 从assets读取模版图片信息，构造模版列表
      window.electron.ipcRenderer.send('readDir', `${appPath}assets/template`);
      window.electron.ipcRenderer.on('fileReadReply', (_, files) => {
        console.log('该目录下的文件有：\n');
        console.log(files);
      });
    });
  };
}

export default useReadDirAssetsTemplate;
