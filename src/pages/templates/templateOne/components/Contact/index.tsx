/**
 * @desc 联系方式
 * @author pengdaokuan
 */
import style from '@/pages/templates/styles/template-one.module.scss';

function Contact() {
  return (
    <div className={style.container}>
      <p className={style.title}>联系方式 Contact</p>
      <ul className={style.content}>
        <li>电话：176****2612</li>
        <li>邮箱：1063137960@qq.com</li>
      </ul>
    </div>
  );
}

export default Contact;
