import Modal from '@/components/Modal';
import Form from './Form';
import { useSelector } from 'react-redux';
import Wrapper from '../WrapperExperience';
import AdapterExperience, { AdapterExperienceType } from '../WrapperExperience/adapter';
import useUpdateResume from '@/hooks/useUpdateResume';
import {State} from "@/type/storeState.ts";

interface ExperienceProps {
  onClose: () => void;
}

/**
 * 项目经验弹窗
 * @param onClose 关闭事件
 * @constructor
 */
function ProjectExperience({ onClose }: ExperienceProps) {
  const updateResume = useUpdateResume();
  const projectExperience: TSResume.ProjectExperience[] = useSelector(
    (state: State) => state.resumeModel.projectExperience
  );

  const updateDataList = (newDataList: AdapterExperienceType[]) => {
    updateResume<AdapterExperienceType[]>('projectExperience', newDataList);
  };

  return (
    <Modal.Dialog
      title="项目经验"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
      width={960}
      childStyle={{ padding: 0 }}
    >
      <Wrapper dataList={AdapterExperience.project(projectExperience)} updateDataList={updateDataList}>
        <Form />
      </Wrapper>
    </Modal.Dialog>
  );
}

export default ProjectExperience;