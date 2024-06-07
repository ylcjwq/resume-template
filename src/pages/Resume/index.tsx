import getAppPath from "@/utils/appPath.ts";
import ResumeAction from './ResumeAction';
import ResumeContent from './ResumeContent';
import ResumeToolbar from './ResumeToolbar';
import * as UseTemplateList from './UseTemplate';
import './index.scss'

const Resume = () => {
    getAppPath().then(appPath => {
        window.electron.ipcRenderer.send('fileRead', `${appPath}/src/App.tsx`)
    })
    window.electron.ipcRenderer.on('fileReadReply', (_, data) => {
        console.log(data)
    })
    const HEADER_ACTION_HEIGHT = 92;
    const height = document.body.clientHeight;
    return (
        <div className={'container'}>
            <div className={'header'}>
                <ResumeAction/>
            </div>
            <div className={'content'}>
                <ResumeContent/>
            </div>
            <div className={'toolbar'}>
                <ResumeToolbar/>
            </div>
        </div>
    )
}
export default Resume;