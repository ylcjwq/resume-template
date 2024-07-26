import ResumeAction from './ResumeAction';
import ResumeContent from './ResumeContent';
import ResumeToolbar from './ResumeToolbar';
import './index.scss'

const Resume = () => {
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