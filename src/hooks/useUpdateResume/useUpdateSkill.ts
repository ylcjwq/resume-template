import {useDispatch} from 'react-redux';
import {setSkill} from "@/store/modules/resumeModel.ts";

/**
 * 修改技能清单（skill）
 */
const useUpdateSkill = () => {
  const dispatch = useDispatch();
  return <T>(stateKey: string, stateValue: T) => {
    const skillList = stateValue ? (stateValue as string).split('｜') : [];
    dispatch(setSkill([
      {
        key: stateKey,
        values: stateValue,
      },
      {
        key: 'skillList',
        values: skillList,
      },
    ]));
  };
}

export default useUpdateSkill;