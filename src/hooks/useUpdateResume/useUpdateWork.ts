import {useSelector, useDispatch} from 'react-redux';
import {State} from "@/type/storeState.ts";
import {setWork} from "@/store/modules/resumeModel.ts";

/**
 * 修改工作期望（work）
 */
const useUpdateWork = () => {
  const dispatch = useDispatch();
  const work: TSResume.Work = useSelector((state: State) => state.resumeModel.work);

  return <T>(stateKey: string, stateValue: T) => {
    let cityList = work?.cityList ? [...work.cityList] : [];
    if (stateKey === 'city') {
      cityList = (stateValue as string).split('｜');
    }
    dispatch(setWork({
      ...work,
      cityList,
      [stateKey]: stateValue,
    }));
  };
}

export default useUpdateWork;