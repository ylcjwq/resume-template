import Modal from '@/components/Modal';
import Form from './Form';
import { useSelector } from 'react-redux';
import Wrapper from '../WrapperExperience';
import AdapterExperience, { AdapterExperienceType } from '../WrapperExperience/adapter';
import useUpdateResume from '@/hooks/useUpdateResume';
import {State} from "@/type/storeState.ts";

interface WorkExperienceProps {
  onClose: () => void;
}

/**
 * 工作经历弹窗
 * @param onClose 关闭事件
 * @constructor
 */
const WorkExperience = ({ onClose }: WorkExperienceProps) => {
  const updateResume = useUpdateResume();
  const workExperience: TSResume.WorkExperience[] = useSelector((state: State) => state.resumeModel.workExperience);
  const updateDataList = (newDataList: AdapterExperienceType[]) => {
    updateResume<AdapterExperienceType[]>('workExperience', newDataList);
  };

  return (
    <Modal.Dialog
      title="工作经历"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
      width={960}
      childStyle={{ padding: 0 }}
    >
      <Wrapper dataList={AdapterExperience.work(workExperience)} updateDataList={updateDataList}>
        <Form />
      </Wrapper>
    </Modal.Dialog>
  );
}

export default WorkExperience;