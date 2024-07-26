import style from './index.module.scss';
import Modal from '@/components/Modal';
import Input from '@/components/Input';
import { useSelector } from 'react-redux';
import {State} from "@/type/storeState.ts";
import useUpdateResume from "@/hooks/useUpdateResume";

type WorkProps = {
  onClose: () => void;
}

/**
 * 工作期望弹窗
 * @param onClose 关闭事件
 * @constructor
 */
const Work = ({ onClose }: WorkProps) => {

  const updateResume = useUpdateResume()
  const work: TSResume.Work = useSelector((state: State) => state.resumeModel.work);

  return (
    <Modal.Dialog
      title="工作期望"
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
            <span>职 位 ：</span>
          </div>
          <div className={style.right}>
            <Input
              onChange={(e) => {
                updateResume<string>('work/job', e.target.value);
              }}
              value={work?.job || ''}
              placeholder="求职岗位"
              allowClear={true}
            />
          </div>
        </div>
        <div className={style.flex}>
          <div className={style.left}>
            <span className={style.require}>*</span>
            <span>城 市 ：</span>
          </div>
          <div className={style.right}>
            <Input
              onChange={(e) => {
                updateResume<string>('work/city', e.target.value);
              }}
              value={work?.city || ''}
              placeholder="请输入意愿城市"
              allowClear={true}
            />
            <div className={style.tips}> * 多个地点以｜分割</div>
          </div>
        </div>
      </div>
    </Modal.Dialog>
  );
}

export default Work;