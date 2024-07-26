import style from './index.module.scss'
import Modal from '@/components/Modal';
import Input from '@/components/Input';
import { useSelector } from 'react-redux';
import useUpdateResume from '@/hooks/useUpdateResume';
import {State} from "@/type/storeState.ts";

interface EvaluationProps {
  onClose: () => void;
}

/**
 * 个人评价弹窗
 * @param onClose 关闭事件
 * @constructor
 */
const Evaluation = ({ onClose }: EvaluationProps) => {

  const updateResume = useUpdateResume();
  const evaluation: string = useSelector((state: State) => state.resumeModel.evaluation);

  return (
    <Modal.Dialog
      title="个人评价"
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
            <span>评 价 ：</span>
          </div>
          <div className={style.right}>
            <Input
              type="textarea"
              onChange={e => {
                updateResume<string>('evaluation', e.target.value);
              }}
              rows={5}
              value={evaluation || ''}
              placeholder="夸一夸自己有什么亮点"
              allowClear={true}
            />
            <div className={style.tips}> * 可通过 | 分割</div>
          </div>
        </div>
      </div>
    </Modal.Dialog>
  );
}

export default Evaluation;