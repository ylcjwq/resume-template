import style from './index.module.scss'
import { useNavigate } from 'react-router'

const Header = () => {

  const navigate = useNavigate();
  const goBack = () => navigate('/');

  return (
    <div className={style.header}>
      <div className={style.back} onClick={goBack}>
        返回
      </div>
      <p className={style.title}>简历模版仓库</p>
    </div>
  );
}

export default Header;
