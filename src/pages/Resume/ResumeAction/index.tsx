import './index.scss'
import { useNavigate } from 'react-router'
import MyButton from '@/components/Button'
const ResumeAction = () => {
    const navigate = useNavigate();
    // 导出PDF
    const onExport = () => {
        console.log('导出pdf');
    };
    return (
        <div className={'actions'}>
            <div className={'back'} onClick={() => navigate('/')}>返回</div>
            <MyButton size="middle" className="export-btn" onClick={onExport}>导出PDF</MyButton>
        </div>
    )
}
export default ResumeAction;