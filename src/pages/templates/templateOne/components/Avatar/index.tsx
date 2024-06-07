/**
 * @desc 头像
 * @author pengdaokuan
 */
import './index.scss';
import AvatarImage from '@assets/avatar.jpg';

function Avatar() {
  return (
    <div className="box">
      <div className="avatar">
        <img src={AvatarImage}  alt={''}/>
      </div>
    </div>
  );
}

export default Avatar;