// 获取项目绝对路径
const getAppPath = () => {
    return new Promise(
        (resolve: (value: string) => void, reject: (value: Error) => void) => {
            window.electron.ipcRenderer.send('getPath');
            window.electron.ipcRenderer.on('replyPath', (_, arg: string) => {
                if (arg) {
                    resolve(arg);
                } else {
                    reject(new Error('项目路径错误'));
                }
            });
        }
    );
}

export default getAppPath;