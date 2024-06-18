import {useDispatch} from 'react-redux';
import {setSchoolExperience} from "@/store/modules/resumeModel.ts";
import {AdapterExperienceType} from '@/pages/Resume/ResumeContent/UseForm/WrapperExperience/adapter.ts'

/**
 * 修改在校经历（School）
 */
const useUpdateSchoolExperience = () => {
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
    dispatch(setSchoolExperience(newList));
  };
}

export default useUpdateSchoolExperience;