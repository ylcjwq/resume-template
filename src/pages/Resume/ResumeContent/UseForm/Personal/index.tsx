import Modal from '@/components/Modal';
import Input from '@/components/Input';
import {useSelector} from 'react-redux';
import style from './index.module.scss'

type PersonalProps = {
  onClose: () => void;
}

const Personal = ({onClose}: PersonalProps) => {
  const hobby: string = useSelector((state: any) => state.resumeModel.hobby);
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);

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
            <span>姓 名 :</span>
          </div>
          <div className={style.right}>
            <Input
              onChange={e => {}}
              value={base?.username || ""}
              placeholder={"请输入姓名"}
              allowClear={true}
            />
          </div>
        </div>
        <div className={style.flex}>
          <div className={style.left}>
            <span className={style.require}>*</span>
            <span>籍 贯 :</span>
          </div>
          <div className={style.right}>
            <Input
              onChange={e => {}}
              value={base?.hometown || ""}
              placeholder={"请输入籍贯"}
              allowClear={true}
            />
          </div>
        </div>
        <div className={style.flex}>
          <div className={style.left}>
            <span className={style.require}>*</span>
            <span>爱 好 :</span>
          </div>
          <div className={style.right}>
            <Input
              type="textarea"
              onChange={e => {}}
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