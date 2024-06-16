import style from './index.module.scss';
import Modal from '@/components/Modal';
import Input from '@/components/Input';
import { useSelector } from 'react-redux';
import {State} from "@/type/storeState.ts";

type ContactProps = {
  onClose: () => void;
}

/**
 * 联系方式弹窗
 * @param onClose 关闭方法
 * @constructor
 */
const Contact = ({ onClose }: ContactProps) => {
  const contact: TSResume.Contact = useSelector((state: State) => state.resumeModel.contact);

  return (
    <Modal.Dialog
      title="联系方式"
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
            <span>电 话 ：</span>
          </div>
          <div className={style.right}>
            <Input
              // onChange={(e) => {}}
              value={contact?.phone || ''}
              placeholder="请输入电话号码"
              allowClear={true}
            />
          </div>
        </div>
        <div className={style.flex}>
          <div className={style.left}>
            <span className={style.require}>*</span>
            <span>邮 箱 ：</span>
          </div>
          <div className={style.right}>
            <Input
              // onChange={(e) => {}}
              value={contact?.email || ''}
              placeholder="请输入邮箱"
              allowClear={true}
            />
          </div>
        </div>
        <div className={style.flex}>
          <div className={style.left}>
            <span className={style.require} style={{opacity: 0}}>
              *
            </span>
            <span>仓 库 ：</span>
          </div>
          <div className={style.right}>
            <Input
              // onChange={(e) => {}}
              value={contact?.github || ''}
              placeholder="Github/Gitee 地址"
              allowClear={true}
            />
          </div>
        </div>
        <div className={style.flex}>
          <div className={style.left}>
            <span className={style.require} style={{opacity: 0}}>
              *
            </span>
            <span>掘 金 ：</span>
          </div>
          <div className={style.right}>
            <Input
              // onChange={(e) => {}}
              value={contact?.juejin || ''}
              placeholder="掘金地址"
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </Modal.Dialog>
  );
}

export default Contact;