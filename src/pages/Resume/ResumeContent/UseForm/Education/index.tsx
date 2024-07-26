import style from './index.module.scss';
import Modal from '@/components/Modal';
import Input from '@/components/Input';
import { useSelector } from 'react-redux';
import {State} from "@/type/storeState.ts";
import useUpdateResume from "@/hooks/useUpdateResume";

type EducationProps = {
  onClose: () => void;
}

/**
 * 教育信息弹窗
 * @param onClose 关闭事件
 * @constructor
 */
const Education = ({ onClose }: EducationProps) => {

  const updateResume = useUpdateResume();
  const base: TSResume.Base = useSelector((state: State) => state.resumeModel.base);

  return (
    <Modal.Dialog
      title="教育信息"
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
            <span className={style.require}>*</span>
            <span>学 校 ：</span>
          </div>
          <div className={style.right}>
            <Input
              onChange={(e) => {
                updateResume('base/school', e.target?.value || '');
              }}
              value={base?.school || ''}
              placeholder="请输入贵校"
              allowClear={true}
            />
          </div>
        </div>
        <div className={style.flex}>
          <div className={style.left}>
            <span className={style.require}>*</span>
            <span>专 业 ：</span>
          </div>
          <div className={style.right}>
            <Input
              onChange={(e) => {
                updateResume('base/major', e.target?.value || '');
              }}
              value={base?.major || ''}
              placeholder="请输入专业"
              allowClear={true}
            />
          </div>
        </div>
        <div className={style.flex}>
          <div className={style.left}>
            <span className={style.require}>*</span>
            <span>学 位 ：</span>
          </div>
          <div className={style.right}>
            <Input
              onChange={(e) => {
                updateResume('base/degree', e.target?.value || '');
              }}
              value={base?.degree || ''}
              placeholder="学士？硕士？还是博士？"
              allowClear={true}
            />
          </div>
        </div>
        <div className={style.flex}>
          <div className={style.left}>
            <span className={style.require}>*</span>
            <span>学 年 ：</span>
          </div>
          <div className={style.right}>
            <Input
              onChange={e => {
                const nextTime = {
                  ...base?.onSchoolTime,
                  beginTime: e.target.value,
                };
                updateResume<object>('base/onSchoolTime', nextTime);
              }}
              value={base?.onSchoolTime?.beginTime || ''}
              placeholder="入学时间"
              allowClear={true}
              style={{width: 300}}
            />
            <span className={style.line}>-</span>
            <Input
              onChange={e => {
                const nextTime = {
                  ...base?.onSchoolTime,
                  endTime: e.target.value,
                };
                updateResume<object>('base/onSchoolTime', nextTime);
              }}
              value={base?.onSchoolTime?.endTime || ''}
              placeholder="毕业时间"
              style={{width: 300}}
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </Modal.Dialog>
  );
}

export default Education;