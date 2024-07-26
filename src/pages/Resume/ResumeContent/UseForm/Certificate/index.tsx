import style from './index.module.scss';
import Modal from '@/components/Modal';
import Input from '@/components/Input';
import { useSelector } from 'react-redux';
import {State} from "@/type/storeState.ts";
import useUpdateResume from '@/hooks/useUpdateResume'

type CertificateProps = {
  onClose: () => void;
}

const Certificate = ({ onClose }: CertificateProps) => {

  const updateResume = useUpdateResume();
  const certificate: string = useSelector((state: State) => state.resumeModel.certificate);

  return (
    <Modal.Dialog
      title="荣誉证书"
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
            <span>证 书 ：</span>
          </div>
          <div className={style.right}>
            <Input
              type="textarea"
              onChange={(e) => {
                updateResume<string>('certificate', e.target.value)
              }}
              rows={5}
              value={certificate || ''}
              placeholder="展示你的奖项和证书吧"
              allowClear={true}
            />
            <div className={style.tips}> * 多个证书以 | 分割</div>
          </div>
        </div>
      </div>
    </Modal.Dialog>
  );
}

export default Certificate;