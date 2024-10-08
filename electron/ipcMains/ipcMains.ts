import {ipcMain, shell, dialog} from "electron";
import fileAction from './file.ts'

const ipcFn = (app: Electron.App) => {
  // 打开外部网页
  ipcMain.on('open', (_,arg) => {
    shell.openExternal(arg).then();
  })

  // 文件读取操作
  ipcMain.on('fileRead', async (event, filePath, encoding) => {
    try {
      const data = await fileAction.read(filePath, encoding)
      event.reply('fileReadReply', data);
    } catch (error) {
      // 如果发生错误，返回错误信息
      event.returnValue = (error as Error).message;
    }
  })

  // 文件读取操作
  ipcMain.on('fileReadImg', async (event, filePath, encoding) => {
    try {
      const data = await fileAction.read(filePath, encoding)
      event.reply('fileReadImgReply', data);
    } catch (error) {
      // 如果发生错误，返回错误信息
      event.returnValue = (error as Error).message;
    }
  })

  // 文件目录读取操作
  ipcMain.on('fileReadDir', async (event, filePath) => {
    try {
      const data = await fileAction.readDir(filePath);
      event.reply('fileReadDirReply', data);
    } catch (error) {
      // 如果发生错误，返回错误信息
      event.returnValue = (error as Error).message;
    }
  })

  // 文件是否存在
  ipcMain.on('hasFile', async (event, filePath) => {
    try {
      await fileAction.hasFile(filePath);
      event.reply('hasFileReply', true);
    } catch (error) {
      // 如果发生错误，返回错误信息
      event.reply('hasFileReply', false);
      event.returnValue = (error as Error).message;
    }
  })

  // 文件写入操作
  ipcMain.on('fileWrite', async (event, filePath, content, encoding) => {
    try {
      const data = await fileAction.write(filePath, content, encoding);
      event.reply('fileWriteReply', data);
    } catch (error) {
      // 如果发生错误，返回错误信息
      console.log('write-error',error)
      event.returnValue = (error as Error).message;
    }
  })

  // 创建文件夹操作
  ipcMain.on('mkdirDir', async (event, filePath) => {
    try {
      const data = await fileAction.mkdirDir(filePath);
      event.reply('mkdirDirReply', data);
    } catch (error) {
      // 如果发生错误，返回错误信息
      console.log('mkdir-error',error)
      event.returnValue = (error as Error).message;
    }
  })

  // 获取项目的绝对路径
  ipcMain.on('getPath', async (event) => {
    try {
      const appPath = app.getAppPath();
      event.reply('replyPath', appPath);
    } catch (error) {
      // 如果发生错误，返回错误信息
      event.returnValue = (error as Error).message;
    }
  })

  // 应用设置，保存自定义存储路径
  ipcMain.on('open-save-resume-path', (event) => {
    dialog
      .showOpenDialog({
        properties: ['openDirectory'],
      })
      .then((result) => {
        event.reply('save-resume-path-reply', result.filePaths);
      })
      .catch((err) => {
        event.reply('save-resume-path-reply', err);
      });
  });
}

export default ipcFn