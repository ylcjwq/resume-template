// 菜单栏
import {dialog, MenuItemConstructorOptions, MenuItem, BrowserWindow} from 'electron';
import path from "node:path";
import {RENDERER_DIST, VITE_DEV_SERVER_URL} from "./main.ts";
import {fileURLToPath} from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url))

let setting: BrowserWindow | null

const createWindow = () => {
  setting = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    width: 720,
    height: 240,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
    },
  })
  // 隐藏顶部菜单栏
  setting.setMenu(null);

  if (VITE_DEV_SERVER_URL) {
    setting.loadURL(path.join(VITE_DEV_SERVER_URL,'/src/windowPages/setting/index.html'))
  } else {
    setting.loadFile(path.join(RENDERER_DIST, '/src/windowPages/setting/index.html'))
  }
}

const customMenu: (MenuItemConstructorOptions | MenuItem)[] = [
  {
    label: '设置',
    role: 'help',
    submenu: [
      {
        label: '关于',
        click: function () {
          dialog.showMessageBox({
            type: 'info',
            title: '关于',
            message: '软件创作人-袁隆成',
            detail: '涉及技术： React 18+、 React Router v6、 Redux、 Electron、 Scss',
          });
        },
      },
      {
        label: '存储路径',
        click: function () {
          createWindow()
        },
      },
    ],
  },
  {
    label: '快捷键',
    submenu: [
      {
        label: '复制',
        accelerator: 'CmdOrCtrl+C',
        role: 'copy',
      },
      {
        label: '粘贴',
        accelerator: 'CmdOrCtrl+V',
        role: 'paste',
      },
    ],
  },
];

export default customMenu;
