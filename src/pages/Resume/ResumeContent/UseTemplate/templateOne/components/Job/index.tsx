import style from '@/pages/Resume/ResumeContent/UseTemplate/styles/template-one.module.scss';
import styleOnly from './index.module.scss';
import { useSelector } from 'react-redux';
import {State} from "@/type/storeState.ts";

/**
 * 求职意向
 * @constructor
 */
const Job = () => {

  const work: TSResume.Work = useSelector((state: State) => state.resumeModel.work);
  const cityList = (work && work?.cityList) || [];

  return (
    <div className={style.container}>
      <p className={style.title}>求职意向 Work</p>
      <ul className={style.content}>
        {work?.job && <li>职位：{work?.job}</li>}
        {work?.city && cityList?.length > 0 && (
          <li>
            城市：
            {cityList?.map((city: string, index: number) => {
              return (
                <span key={index}>
                  {city}
                  {cityList.length - 1 !== index && <span className={styleOnly.line}>|</span>}
                </span>
              );
            })}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Job;
