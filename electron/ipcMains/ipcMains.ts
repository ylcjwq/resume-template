import {ipcMain, shell} from "electron";
import fileAction from './file.ts'

const ipcFn = (app: Electron.App) => {
  // 打开外部网页
  ipcMain.on('open', (_,arg) => {
    shell.openExternal(arg).then();
  })

  // 文件读取操作
  ipcMain.on('fileRead', async (event, filePath) => {
    try {
      const data = await fileAction.read(filePath)
      event.reply('fileReadReply', data);
    } catch (error) {
      // 如果发生错误，返回错误信息
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