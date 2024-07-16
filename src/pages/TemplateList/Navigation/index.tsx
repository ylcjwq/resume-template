import style from './index.module.scss'
import UseIcon from '@assets/icon/use.png';
import TemplateCoverOne from '@/assets/template/template1.png';
import TemplateCoverTwo from '@/assets/template/template2.png';
import ScrollBox from '@/components/ScrollBox';
import Button from '@/components/Button';

const Navigation = () => {
  const height = document.body.clientHeight;

  return (
    <div className={style.navigation}>
      <ScrollBox maxHeight={height - 60 - 32}>
        {/* 悬浮效果一：属于当前模版 */}
        <div className={style.template}>
          <img className={style.cover} src={TemplateCoverOne} alt="cover" />
          <div className={style.mask}>
            <img className={style.use} src={UseIcon} alt="cover"/>
          </div>
        </div>
        {/* 悬浮效果二：可选择预览模版 */}
        <div className={style.template}>
          <img className={style.cover} src={TemplateCoverTwo} alt="cover"/>
          <div className={style.mask}>
            <Button size="middle" className={style.viewBtn} onClick={() => {}}>
              预览模版
            </Button>
          </div>
        </div>
      </ScrollBox>
    </div>
  );
}

export default Navigation;
