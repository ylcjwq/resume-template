import style from './index.module.scss'
import Button from '@/components/Button';

function Footer() {
  const onMadeResume = () => {
    console.log('跳转前往制作页面');
  };
  return (
    <div className={style.footer}>
      <Button size="middle" className={style.useBtn} onClick={onMadeResume}>
        以此模版前往制作简历
      </Button>
    </div>
  );
}

export default Footer;