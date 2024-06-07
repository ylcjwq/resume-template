/**
 * @desc 荣誉奖励
 * @author pengdaokuan
 */

import style from '@/pages/Resume/ResumeContent/UseTemplate/styles/template-one.module.scss';

function Certificate() {
  return (
    <div className={style.container}>
      <p className={style.title}>荣誉奖励 Certificate</p>
      <ul className={style.content}>
        <li>全国英语十级证书</li>
        <li>全国计算机专家级证书</li>
        <li>广东第一帅哥（自封）</li>
        <li>广州第一届拼搏杯大赛参与奖</li>
      </ul>
    </div>
  );
}

export default Certificate;
