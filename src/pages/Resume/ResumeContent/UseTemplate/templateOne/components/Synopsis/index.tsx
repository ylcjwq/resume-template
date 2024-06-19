import style from './index.module.scss';
import { useSelector } from 'react-redux';
import {State} from "@/type/storeState.ts";

/**
 * 个人介绍
 * @constructor
 */
const Synopsis = () => {

  const base: TSResume.Base = useSelector((state: State) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: State) => state.resumeModel.work);
  const evaluation: string = useSelector((state: State) => state.resumeModel.evaluation);
  const evaluationList: string[] = useSelector((state: State) => state.resumeModel.evaluationList);

  return (
    <div className={style.content}>
      {base?.username && <p className={style.name}>{base?.username}</p>}
      {work?.job && <p className={style.job}>{work?.job}</p>}
      {evaluation && <p className={style.summary}>{evaluationList?.join('，')}</p>}
    </div>
  );
}

export default Synopsis;
