import Modal from '@/components/Modal';
import Form from './Form';
import { useSelector } from 'react-redux';
import Wrapper from '../WrapperExperience';
import AdapterExperience, { AdapterExperienceType } from '../WrapperExperience/adapter';
import useUpdateResume from '@/hooks/useUpdateResume';
import {State} from "@/type/storeState.ts";

interface SchoolExperienceProps {
  onClose: () => void;
}

/**
 * 在校经历弹窗
 * @param onClose 关闭事件
 * @constructor
 */
function SchoolExperience({ onClose }: SchoolExperienceProps) {
  const updateResume = useUpdateResume();
  const schoolExperience: TSResume.SchoolExperience[] = useSelector((state: State) => state.resumeModel.schoolExperience);

  const updateDataList = (newDataList: AdapterExperienceType[]) => {
    updateResume<AdapterExperienceType[]>('schoolExperience', newDataList);
  };

  return (
    <Modal.Dialog
      title="在校经历"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
      width={960}
      childStyle={{ padding: 0 }}
    >
      <Wrapper dataList={AdapterExperience.school(schoolExperience)} updateDataList={updateDataList}>
        <Form />
      </Wrapper>
    </Modal.Dialog>
  );
}

export default SchoolExperience;