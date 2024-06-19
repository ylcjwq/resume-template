import style from '@/pages/Resume/ResumeContent/UseTemplate/styles/template-one.module.scss';
import { useSelector } from 'react-redux';
import {State} from "@/type/storeState.ts";

/**
 * 基本信息
 * @constructor
 */
const BaseInfo = () => {

  const base: TSResume.Base = useSelector((state: State) => state.resumeModel.base);

  return (
    <div className={style.container}>
      <p className={style.title}>基本信息 Basic</p>
      <ul className={style.content}>
        {base?.school && <li>院校：{base?.school}</li>}
        {base?.major && <li>专业：{base?.major}</li>}
        {base?.degree && <li>学历：{base?.degree}</li>}
        {base?.onSchoolTime && base?.onSchoolTime?.beginTime && base?.onSchoolTime?.endTime && (
          <li>
            学年：{base?.onSchoolTime?.beginTime} - {base?.onSchoolTime?.endTime}
          </li>
        )}
        {base?.hometown && <li>籍贯：{base?.hometown}</li>}
      </ul>
    </div>
  );
}

export default BaseInfo;
