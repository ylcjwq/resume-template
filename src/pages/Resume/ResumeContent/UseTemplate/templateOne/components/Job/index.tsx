/**
 * @desc 求职意向
 * @author pengdaokuan
 */
import style from '@/pages/Resume/ResumeContent/UseTemplate/styles/template-one.module.scss';
import './index.scss';

function Job() {
  return (
    <div className={style.container}>
      <p className={style.title}>求职意向 Work</p>
      <ul className={style.content}>
        <li>职位：前端攻城狮</li>
        <li>城市：广州｜珠海</li>
      </ul>
    </div>
  );
}

export default Job;
