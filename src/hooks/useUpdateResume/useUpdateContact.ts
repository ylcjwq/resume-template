import { useSelector, useDispatch } from 'react-redux';
import {State} from "@/type/storeState.ts";
import {setContact} from "@/store/modules/resumeModel.ts";

/**
 * 修改联系方式（contact）
 */
const useUpdateContact = () => {
  const dispatch = useDispatch();
  const contact: TSResume.Contact = useSelector((state: State) => state.resumeModel.contact);

  return <T>(stateKey: string, stateValue: T) => {
    dispatch(setContact({
          ...contact,
          [stateKey]: stateValue,
        },
    ));
  };
}

export default useUpdateContact;