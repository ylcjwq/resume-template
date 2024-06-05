import {ipcMain, shell} from "electron";
import fileAction from './file.ts'

const ipcFn = () => {
  // 打开外部网页
  ipcMain.on('open', (_,arg) => {
    shell.openExternal(arg);
  })

  // 文件读取操作
  ipcMain.on('fileRead', async (event, path) => {
    console.log(path)
    try {
      const data = await fileAction.read(path)
      event.reply('fileReadReply', data);
    } catch (error) {
      // 如果发生错误，返回错误信息
      event.returnValue = error.message;
    }
  })
}

export default ipcFn