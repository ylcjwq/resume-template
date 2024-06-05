import getAppPath from "../utils/appPath.ts";

const Resume = () => {
    getAppPath().then(appPath => {
        console.log(appPath)
        window.electron.ipcRenderer.send('fileRead',`${appPath}/src/App.tsx`)
    })
    window.electron.ipcRenderer.on('fileReadReply',(_, data) => {
        console.log(data)
    })
    console.log(window.electron)
    return <div>我是简历模块</div>;
}
export default Resume;