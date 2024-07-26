import Modal from '@/components/Modal';
import Input from '@/components/Input';
import {useSelector} from 'react-redux';
import style from './index.module.scss';
import {State} from "@/type/storeState.ts";
import useUpdateResume from "@/hooks/useUpdateResume";

type PersonalProps = {
  onClose: () => void;
}

/**
 * 基本信息弹窗
 * @param onClose 关闭事件
 * @constructor
 */
const Personal = ({onClose}: PersonalProps) => {

  const updateResume = useUpdateResume()
  const hobby: string = useSelector((state: State) => state.resumeModel.hobby);
  const base: TSResume.Base = useSelector((state: State) => state.resumeModel.base);

  return (
    <Modal.Dialog
      title={'个人信息'}
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
            <span>姓 名 ：</span>
          </div>
          <div className={style.right}>
            <Input
              onChange={e => {
                updateResume('base/username', e.target?.value || '');
              }}
              value={base?.username || ""}
              placeholder={"请输入姓名"}
              allowClear={true}
            />
          </div>
        </div>
        <div className={style.flex}>
          <div className={style.left}>
            <span className={style.require}>*</span>
            <span>籍 贯 ：</span>
          </div>
          <div className={style.right}>
            <Input
              onChange={e => {
                updateResume('base/hometown', e.target?.value || '');
              }}
              value={base?.hometown || ""}
              placeholder={"请输入籍贯"}
              allowClear={true}
            />
          </div>
        </div>
        <div className={style.flex}>
          <div className={style.left}>
            <span className={style.require}>*</span>
            <span>爱 好 ：</span>
          </div>
          <div className={style.right}>
            <Input
              type="textarea"
              onChange={e => {
                updateResume('hobby', e.target?.value || '');
              }}
              value={hobby  || ""}
              placeholder={"你有什么特长或爱好呢"}
              allowClear={true}
              rows={5}
            />
          </div>
        </div>
      </div>
    </Modal.Dialog>
  )
}

export default Personal;