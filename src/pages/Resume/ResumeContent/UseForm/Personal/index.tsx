import Modal from '@/components/Modal';
import Input from '@/components/Input';
import {useSelector} from 'react-redux';
import style from './index.module.scss'

const Personal = (props: any) => {
  const hobby: string = useSelector((state: any) => state.resumeModel.hobby);
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);

  return (
    <Modal.Dialog title={'个人信息'}>
      <div className={style.form}>
        <div className={style.flex}>
          <div className={style.left}>
            <span className={style.require}>*</span>
            <span>姓 名 :</span>
          </div>
          <div className={style.right}>
            <Input onChange={e => {}} value={base?.username || ""} placeholder={"请输入姓名"} allowClear={true}/>
          </div>
        </div>
      </div>
    </Modal.Dialog>
  )
}

export default Personal;