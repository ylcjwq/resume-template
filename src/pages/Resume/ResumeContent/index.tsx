import * as UseTemplateList from './UseTemplate';
import ScrollBox from '@/components/ScrollBox'
import './index.scss'
const ResumeContent = () => {
    const HEADER_ACTION_HEIGHT = 92;
    const height = document.body.clientHeight;
    console.log(height)

    return (
        <ScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
            <UseTemplateList.TemplateOne />
        </ScrollBox>
    )
}
export default ResumeContent;