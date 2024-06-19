import style from './index.module.scss';
import { useSelector } from 'react-redux';
import {State} from "@/type/storeState.ts";

/**
 * 专业技能
 * @constructor
 */
const Skill = () => {

  const skill: string = useSelector((state: State) => state.resumeModel.skill);
  const skillList: string[] = useSelector((state: State) => state.resumeModel.skillList);

  return (
    <div className={style.content}>
      <p className={style.label}>技能证书 Skill</p>
        <ul className={style.skill}>
          {skill &&
            skillList?.length > 0 &&
            skillList?.map((skill: string, index: number) => {
              return (
                <li className={style.item} key={index}>
                  {skill}
                </li>
              );
            })}
        </ul>
    </div>
  );
}

export default Skill;
