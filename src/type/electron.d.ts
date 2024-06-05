// electron.d.ts
declare global {
    interface window extends Window{
        electron: typeof Electron;
    }
}

export {};