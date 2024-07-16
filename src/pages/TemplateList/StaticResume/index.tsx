import style from './index.module.scss'
import * as TemplateList from '@/pages/templates';
import Footer from '../Footer';
import ScrollBox from '@/components/ScrollBox';

const StaticResume = () => {
  const HEADER_HEIGHT = 76; // 距离头部距离
  const height = document.body.clientHeight;

  return (
    <div className={style.container}>
      <ScrollBox maxHeight={height - HEADER_HEIGHT}>
        <TemplateList.TemplateOne />
        <Footer />
      </ScrollBox>
    </div>
  );
}

export default StaticResume;