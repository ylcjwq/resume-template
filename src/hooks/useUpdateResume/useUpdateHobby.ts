import {useDispatch} from 'react-redux';
import {setHobby} from "@/store/modules/resumeModel.ts";

/**
 * 修改个人特长爱好（hobby）
 */
const useUpdateHobby = () => {
  const dispatch = useDispatch();
  return <T>(stateValue: T) => {
    dispatch(setHobby(stateValue));
  };
}

export default useUpdateHobby