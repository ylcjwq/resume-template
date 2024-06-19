import style from '@/pages/Resume/ResumeContent/UseTemplate/styles/template-one.module.scss';
import { useSelector } from 'react-redux';
import {State} from "@/type/storeState.ts";

/**
 * 荣誉奖励
 * @constructor
 */
const Certificate = () => {

  const certificate: string = useSelector((state: State) => state.resumeModel.certificate);
  const certificateList: string[] = useSelector((state: State) => state.resumeModel.certificateList);

  return (
    <div className={style.container}>
      <p className={style.title}>荣誉奖励 Certificate</p>
      <ul className={style.content}>
        {certificate &&
          certificateList.length > 0 &&
          certificateList?.map((value: string, index: number) => {
            return <li key={index}>{value}</li>;
          })}
      </ul>
    </div>
  );
}

export default Certificate;
