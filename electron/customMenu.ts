// 菜单栏
import {app, dialog, MenuItemConstructorOptions, MenuItem, BrowserWindow, shell} from 'electron';
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
    label: '平台',
    role: 'help',
    submenu: [
      {
        label: '源码',
        click: function () {
          shell.openExternal('https://github.com/ylcjwq/resume-template');
        },
      },
      {
        label: '介绍',
        click: function () {
          shell.openExternal('https://github.com/ylcjwq/resume-template/blob/master/README.md');
        },
      },
    ],
  },
  {
    label: '编辑',
    submenu: [
      {
        label: '撤销',
        accelerator: 'CmdOrCtrl+Z',
        role: 'undo',
      },
      {
        label: '重做',
        accelerator: 'Shift+CmdOrCtrl+Z',
        role: 'redo',
      },
      {
        type: 'separator',
      },
      {
        label: '剪切',
        accelerator: 'CmdOrCtrl+X',
        role: 'cut',
      },
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
      {
        label: '全选',
        accelerator: 'CmdOrCtrl+A',
        role: 'selectAll',
      },
    ],
  },
  {
    label: '视图',
    submenu: [
      {
        label: '刷新当前页面',
        accelerator: 'CmdOrCtrl+R',
        click: (_, focusedWindow) => {
          if (focusedWindow) {
            focusedWindow.reload();
          }
        },
      },
      {
        label: '切换全屏幕',
        accelerator: (() => {
          if (process.platform === 'darwin') {
            return 'Ctrl+Command+F';
          } else {
            return 'F11';
          }
        })(),
        click: (_, focusedWindow) => {
          if (focusedWindow) {
            focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
          }
        },
      },
      {
        label: '切换开发者工具',
        role: 'toggleDevTools',
        accelerator: (() => {
          if (process.platform === 'darwin') {
            return 'Alt+Command+I';
          } else {
            return 'Ctrl+Shift+I';
          }
        })(),
        click: (_, focusedWindow) => {
          if (focusedWindow) {
            focusedWindow.webContents.openDevTools();
          }
        },
      },
    ],
  },
  {
    label: '窗口',
    role: 'window',
    submenu: [
      {
        label: '最小化',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize',
      },
      {
        label: '关闭',
        accelerator: 'CmdOrCtrl+W',
        role: 'close',
      },
      {
        type: 'separator',
      },
    ],
  },
  {
    label: '设置',
    submenu: [
      {
        label: '修改数据储存路径',
        click: () => {
          createWindow();
        },
      },
      {
        label: '关于',
        click: () => {
          dialog.showMessageBox({
            type: 'info',
            title: '关于',
            message: '软件创作人-袁隆成',
            detail: '涉及技术： React 18+、 React Router v6、 Redux、 Electron、 Scss',
          });
        },
      },
    ],
  },
  {
    label: '联系我',
    click: () => {
      dialog.showMessageBox({
            type: 'info',
            title: '联系我',
            message: '个人微信',
            detail: 'people-y-506',
      });
    }
  },
];

if (process.platform === 'darwin') {
  const { name } = app;
  customMenu.unshift({
    label: name,
    submenu: [
      {
        label: '关于 ' + name,
        role: 'about',
      },
      {
        type: 'separator',
      },
      {
        label: '服务',
        role: 'services',
        submenu: [],
      },
      {
        type: 'separator',
      },
      {
        label: 'Hide ' + name,
        accelerator: 'Command+H',
        role: 'hide',
      },
      {
        label: 'Hide Others',
        accelerator: 'Command+Shift+H',
        role: 'hideOthers',
      },
      {
        label: 'Show All',
        role: 'unhide',
      },
      {
        type: 'separator',
      },
      {
        label: '退出',
        accelerator: 'Command+Q',
        click: function () {
          app.quit();
        },
      },
    ],
  });
}

export default customMenu;
