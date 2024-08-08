/**
 * @desc 头像
 */
import style from './index.module.scss'
import AvatarImage from '@/assets/react.svg';

function Avatar() {
  return (
    <div className={style.box}>
      <div className={style.avatar}>
        <img src={AvatarImage}  alt={''}/>
      </div>
    </div>
  );
}

export default Avatar;
