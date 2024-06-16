import style from './index.module.scss';
import Modal from '@/components/Modal';
import Input from '@/components/Input';
import { useSelector } from 'react-redux';
import RecommendSkill, { IRecommendSkill } from '@/constants/skill.ts';
import {State} from "@/type/storeState.ts";

interface SkillProps {
  onClose: () => void;
}

/**
 * 技能清单弹窗
 * @param onClose 关闭事件
 * @constructor
 */
const Skill = ({ onClose }: SkillProps) => {
  const skill: string = useSelector((state: State) => state.resumeModel.skill);

  return (
    <Modal.Dialog
      title="个人信息"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
    >
      <div className={style.form}>
        <div className={style.flex}>
          <div className={style.left}>
            <span className={style.require} style={{opacity: 0}}>
              *
            </span>
            <span>技 能 ：</span>
          </div>
          <div className={style.right}>
            <div className={style.action}>
              {RecommendSkill.map((skill: IRecommendSkill) => {
                return (
                  <div
                    className={style.label}
                    key={skill.uid}
                    style={{
                      color: skill?.styles?.font,
                      borderColor: skill?.styles?.font,
                      backgroundColor: skill?.styles?.bg,
                    }}
                    onClick={() => {
                      const value = `${skill}${skill ? '｜' : ''}${skill.label}`;
                    }}
                  >
                    {skill.label}
                  </div>
                );
              })}
            </div>
            <Input
              type="textarea"
              // onChange={(e) => {}}
              rows={5}
              value={skill}
              placeholder="例如 Vue、React"
              allowClear={true}
            />
            <div className={style.tips}> * 多个技能以 | 分割</div>
          </div>
        </div>
      </div>
    </Modal.Dialog>
  );
}

export default Skill;