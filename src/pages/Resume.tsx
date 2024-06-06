import getAppPath from "../utils/appPath.ts";
import Button from "../components/Button";

const Resume = () => {
    getAppPath().then(appPath => {
        console.log(appPath)
        window.electron.ipcRenderer.send('fileRead', `${appPath}/src/App.tsx`)
    })
    window.electron.ipcRenderer.on('fileReadReply', (_, data) => {
        console.log(data)
    })
    console.log(window.electron)
    return (
        <div>
            <Button width={100}>
                我是简历模块
            </Button>
        </div>
    )
}
export default Resume;