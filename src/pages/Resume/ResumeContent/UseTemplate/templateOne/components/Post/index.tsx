import style from './index.module.scss';
import { useSelector } from 'react-redux';
import {State} from "@/type/storeState.ts";

/**
 * 在校经历
 * @constructor
 */
const Post = () => {

  const schoolExperience: TSResume.SchoolExperience[] = useSelector((state: State) => state.resumeModel.schoolExperience);

  return (
    <div className={style.content}>
      <p className={style.label}>在校经历 Post</p>
      <ul className={style.list}>
        {!!schoolExperience?.length &&
          schoolExperience?.map((experience: TSResume.SchoolExperience, index: number) => {
            return (
              <li className={style.flex} key={index}>
                <div className={style.left}>
                  <p>
                    {experience?.beginTime}-{experience?.endTime}
                  </p>
                  <p>{experience?.post}</p>
                </div>
                <div className={style.flex}>
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

export default Post;
