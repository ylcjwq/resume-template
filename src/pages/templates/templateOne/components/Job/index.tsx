/**
 * @desc 求职意向
 * @author pengdaokuan
 */
import style from '@/pages/templates/styles/template-one.module.scss';
import './index.scss';

function Job() {
  return (
    <div className={style.container}>
      <p className={style.title}>求职意向 Work</p>
      <ul className={style.content}>
        <li>职位：前端工程师</li>
        <li>城市：广州｜成都｜海口</li>
      </ul>
    </div>
  );
}

export default Job;
