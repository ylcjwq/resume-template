import {ipcMain, shell} from "electron";
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

  // 文件读取操作
  ipcMain.on('fileWrite', async (event, filePath, content, encoding) => {
    try {
      const data = await fileAction.write(filePath, content, encoding)
      event.reply('fileWriteReply', data);
    } catch (error) {
      // 如果发生错误，返回错误信息
      console.log(error)
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
}

export default ipcFn