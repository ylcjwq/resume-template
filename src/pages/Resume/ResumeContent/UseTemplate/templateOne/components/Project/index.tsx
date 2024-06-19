import { useSelector } from 'react-redux';
import {State} from "@/type/storeState.ts";
import style from "./index.module.scss";

/**
 * 项目经历
 * @constructor
 */
const Project = () => {

  const projectExperience: TSResume.ProjectExperience[] = useSelector(
    (state: State) => state.resumeModel.projectExperience
  );

  return (
    <div className={style.content}>
      <p className={style.label}>项目经历 Project</p>
      <ul className={style.list}>
        {!!projectExperience?.length &&
          projectExperience?.map((experience: TSResume.ProjectExperience, index: number) => {
            return (
              <li className={style.flex} key={index}>
                <div className={style.left}>
                  {(experience?.beginTime || experience?.endTime) && (
                    <p>
                      {experience?.beginTime && !experience?.endTime && <span>{experience?.beginTime}</span>}
                      {!experience?.beginTime && experience?.endTime && <span>{experience?.endTime}</span>}
                      {experience?.beginTime && experience?.endTime && (
                        <span>
                          {experience?.endTime} - {experience?.endTime}
                        </span>
                      )}
                    </p>
                  )}
                </div>
                <div className={style.right}>
                  <p>
                    {experience?.projectName && !experience?.post && <span>{experience?.projectName}</span>}
                    {!experience?.projectName && experience?.post && <span>{experience?.post}</span>}
                    {experience?.projectName && experience?.post && (
                      <span>
                        {experience?.post} - {experience?.post}
                      </span>
                    )}
                  </p>
                </div>
                <div className={style.text}>
                  <ul className={style.itemBox}>
                    {experience?.content &&
                      experience?.parseContent &&
                      experience?.parseContent.length > 0 &&
                      experience?.parseContent?.map((content: string, idx: number) => {
                        return (
                          <li className={style.itemContent} key={idx}>
                            <span>{content}</span>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Project;
