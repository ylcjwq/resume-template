import style from './index.module.scss'
import * as TemplateList from '@/pages/templates';
import Footer from '../Footer';
import ScrollBox from '@/components/ScrollBox';
import {useEffect, useState} from "react";

const StaticResume = () => {
  const HEADER_HEIGHT = 76; // 距离头部距离
  const [height, setHeight] = useState(window.innerHeight);
  // 监听窗口大小变化
  const handleResize = () => {
    setHeight(window.innerHeight); // 更新height状态
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[])

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