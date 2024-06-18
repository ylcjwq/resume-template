import {useDispatch} from 'react-redux';
import {setWorkExperience} from "@/store/modules/resumeModel.ts";
import {AdapterExperienceType} from '@/pages/Resume/ResumeContent/UseForm/WrapperExperience/adapter.ts'

/**
 * 修改校园实习（School）
 */
const useUpdateWorkExperience = () => {
  const dispatch = useDispatch();
  return <T>(stateValue: T) => {
    const newList = (stateValue as [])?.map((s: AdapterExperienceType) => {
      const parseContent = s.content ? s.content.split('｜') : [];
      return {
        ...s,
        department: s?.title,
        parseContent,
      };
    });
    dispatch(setWorkExperience(newList));
  };
}

export default useUpdateWorkExperience;