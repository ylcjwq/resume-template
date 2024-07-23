import style from './index.module.scss'
import { useNavigate } from 'react-router'
import Button from '@/components/Button'
import {useSelector} from "react-redux";
import {State} from "@/type/storeState.ts";
import toPrintPdf from "@/utils/htmlToPDF.ts";
import { createUID } from '@/utils';
import { intToDateString } from '@/utils/time';
import getAppPath from '@/utils/appPath';
import { useReadGlobalConfigFile, useUpdateGlobalConfigFile } from '@/hooks/useGlobalConfigActionHooks';

const ResumeAction = () => {

  const navigate = useNavigate();
  const base: TSResume.Base = useSelector((state: State) => state.resumeModel.base);

  // 导出PDF
  const onExport = () => {
    toPrintPdf(`${base?.username}简历`);
  };

  return (
    <div className={style.actions}>
      <div className={style.back} onClick={() => navigate('/')}>返回</div>
      <Button size="middle" className={style.exportBtn} onClick={onExport}>导出PDF</Button>
    </div>
  )
}
export default ResumeAction;