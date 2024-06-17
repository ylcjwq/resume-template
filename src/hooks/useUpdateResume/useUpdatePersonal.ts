import { useSelector, useDispatch } from 'react-redux';
import {State} from "@/type/storeState.ts";
import {setBase} from "@/store/modules/resumeModel.ts";

/**
 * 修改个人信息（base）
 */
const useUpdatePersonal = () => {
  const dispatch = useDispatch();
  const base: TSResume.Base = useSelector((state: State) => state.resumeModel.base);
  return <T>(stateKey: string, stateValue: T) => {
    dispatch(setBase(
        {
          ...base,
          [stateKey]: stateValue,
        },
    ));
  };
}

export default useUpdatePersonal;