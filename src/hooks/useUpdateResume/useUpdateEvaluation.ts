import {useSelector, useDispatch} from 'react-redux';
// import {State} from "@/type/storeState.ts";
import {setEvaluation} from "@/store/modules/resumeModel.ts";

/**
 * 修改个人评价（evaluation）
 */
const useUpdateEvaluation = () => {
  const dispatch = useDispatch();
  return <T>(stateKey: string, stateValue: T) => {
    const evaluationList = stateValue ? (stateValue as string).split('｜') : [];
    dispatch(setEvaluation([
      {
        key: stateKey,
        values: stateValue,
      },
      {
        key: 'evaluationList',
        values: evaluationList,
      },
    ]));
  };
}

export default useUpdateEvaluation;