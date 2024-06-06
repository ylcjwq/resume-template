// 扩展Window上的electron声明
declare global {
    interface Window{
        electron: typeof Electron;
    }
}

export {};