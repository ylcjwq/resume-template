import style from '@/pages/Resume/ResumeContent/UseTemplate/styles/template-one.module.scss';
import { useSelector } from 'react-redux';
import {State} from "@/type/storeState.ts";

/**
 * 联系方式
 * @constructor
 */
const Contact = () => {

  const contact: TSResume.Contact = useSelector((state: State) => state.resumeModel.contact);

  return (
    <div className={style.container}>
      <p className={style.title}>联系方式 Contact</p>
      <ul className={style.content}>
        {contact?.phone && <li>电话：{contact?.phone}</li>}
        {contact?.email && <li>邮箱：{contact?.email}</li>}
      </ul>
    </div>
  );
}

export default Contact;
