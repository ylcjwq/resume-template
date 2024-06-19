import style from './index.module.scss';
import { useSelector } from 'react-redux';
import {State} from "@/type/storeState.ts";

/**
 * 工作经历
 * @constructor
 */
const Work = () => {

  const workExperience: TSResume.WorkExperience[] = useSelector((state: State) => state.resumeModel.workExperience);

  return (
    <div className={style.content}>
      <p className={style.label}>工作经历 Post</p>
      <ul className={style.list}>
        {!!workExperience?.length &&
          workExperience?.map((experience: TSResume.WorkExperience, index: number) => {
            return (
              <li className={style.flex} key={index}>
                <div className={style.left}>
                  <p>
                    {experience?.beginTime}-{experience?.endTime}
                  </p>
                  <p>{experience?.post}</p>
                </div>
                <div className={style.right}>
                  <p>{experience?.department}</p>
                  <p>{experience?.content}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Work;
