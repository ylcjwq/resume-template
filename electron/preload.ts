import {ipcRenderer, contextBridge} from 'electron'

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    on(...args: Parameters<typeof ipcRenderer.on>) {
      const [channel, listener] = args
      return ipcRenderer.on(channel, (event, ...args) => listener(event, ...args))
    },
    off(...args: Parameters<typeof ipcRenderer.off>) {
      const [channel, ...omit] = args
      return ipcRenderer.off(channel, ...omit)
    },
    send(...args: Parameters<typeof ipcRenderer.send>) {
      const [channel, ...omit] = args
      return ipcRenderer.send(channel, ...omit)
    },
    invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
      const [channel, ...omit] = args
      return ipcRenderer.invoke(channel, ...omit)
    },
    sendSync(...args: Parameters<typeof ipcRenderer.sendSync>) {
      const [channel, ...omit] = args
      return ipcRenderer.sendSync(channel, ...omit)
    },
    once(...args: Parameters<typeof ipcRenderer.once>) {
      const [channel, listener] = args;
      return ipcRenderer.once(channel, (event, ...args) => listener(event, ...args));
    },
    removeListener(...args: Parameters<typeof ipcRenderer.removeListener>) {
      const [channel, listener] = args;
      return ipcRenderer.removeListener(channel, listener);
    },
    removeAllListeners(channel: string) {
      return ipcRenderer.removeAllListeners(channel);
    }
  },
  // You can expose other APTs you need here.
  // ...
})
