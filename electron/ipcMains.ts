import {ipcMain, shell} from "electron";

export const ipcFn = () => {
  // 打开外部网页
  ipcMain.on('open', (_,arg) => {
    shell.openExternal(arg);
  })
}
