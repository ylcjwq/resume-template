import {useDispatch} from 'react-redux';
import {setProjectExperience} from "@/store/modules/resumeModel.ts";
import {AdapterExperienceType} from '@/pages/Resume/ResumeContent/UseForm/WrapperExperience/adapter.ts'

/**
 * 修改项目经验（Project）
 */
const useUpdateProjectExperience = () => {
  const dispatch = useDispatch();
  return <T>(stateValue: T) => {
    const newList = (stateValue as [])?.map((item: AdapterExperienceType) => {
      const parseContent = item.content ? item.content.split('｜') : [];
      return {
        ...item,
        projectName: item?.title,
        parseContent,
      };
    });
    dispatch(setProjectExperience(newList));
  };
}

export default useUpdateProjectExperience;