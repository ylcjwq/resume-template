/**
 * @desc 荣誉奖励
 */

import style from '@/pages/templates/styles/template-one.module.scss';

function Certificate() {
  return (
    <div className={style.container}>
      <p className={style.title}>荣誉奖励 Certificate</p>
      <ul className={style.content}>
        <li>广州第一届拼搏杯大赛参与奖</li>
        <li>全国计算机⑩级证书</li>
      </ul>
    </div>
  );
}

export default Certificate;
