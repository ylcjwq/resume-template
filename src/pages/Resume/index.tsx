import getAppPath from "@/utils/appPath.ts";
import ResumeAction from './ResumeAction';
import ResumeContent from './ResumeContent';
import ResumeToolbar from './ResumeToolbar';
import './index.scss'

const Resume = () => {
    getAppPath().then(appPath => {
      window.electron.ipcRenderer.send('fileRead', `${appPath}/src/App.tsx`);
    })
    window.electron.ipcRenderer.on('fileReadReply', (_, data) => {
        data
    })
    return (
        <div className={'containerBox'}>
            <div className={'header'}>
                <ResumeAction/>
            </div>
            <div className={'contentBox'}>
                <ResumeContent/>
            </div>
            <div className={'toolbar'}>
                <ResumeToolbar/>
            </div>
        </div>
    )
}
export default Resume;