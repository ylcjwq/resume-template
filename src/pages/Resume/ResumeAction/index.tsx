import './index.scss'
import { useNavigate } from 'react-router'
import Button from '@/components/Button'
import {useSelector} from "react-redux";
import {State} from "@/type/storeState.ts";
import toPrintPdf from "@/utils/htmlToPDF.ts";
const ResumeAction = () => {

  const navigate = useNavigate();
  const base: TSResume.Base = useSelector((state: State) => state.resumeModel.base);

  // 导出PDF
  const onExport = () => {
    toPrintPdf(`${base?.username}简历`);
  };

  return (
    <div className={'actions'}>
      <div className={'back'} onClick={() => navigate('/')}>返回</div>
      <Button size="middle" className="export-btn" onClick={onExport}>导出PDF</Button>
    </div>
  )
}
export default ResumeAction;