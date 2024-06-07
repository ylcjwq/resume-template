/**
 * @desc 联系方式
 * @author pengdaokuan
 */
import style from '@/pages/Resume/ResumeContent/UseTemplate/styles/template-one.module.scss';

function Contact() {
  return (
    <div className={style.container}>
      <p className={style.title}>联系方式 Contact</p>
      <ul className={style.content}>
        <li>电话：152****2846</li>
        <li>邮箱：756885686@qq.com</li>
      </ul>
    </div>
  );
}

export default Contact;
