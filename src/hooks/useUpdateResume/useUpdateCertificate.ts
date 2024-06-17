import {useDispatch} from 'react-redux';
import {setCertificate} from "@/store/modules/resumeModel.ts";

/**
 * 修改荣誉证书（certificate）
 */
const useUpdateCertificate = () => {
  const dispatch = useDispatch();
  return <T>(stateKey: string, stateValue: T) => {
    const certificateList = stateValue ? (stateValue as string).split('｜') : [];
    dispatch(setCertificate([
        {
          key: stateKey,
          values: stateValue,
        },
        {
          key: 'certificateList',
          values: certificateList,
        },
      ],
    ));
  };
}

export default useUpdateCertificate;