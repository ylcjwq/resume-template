// 简历模板列表
import style from './index.module.scss'
import Header from "@/pages/TemplateList/Header";
import Navigation from './Navigation';
import StaticResume from './StaticResume';
import RectSize from '@/components/RectSize';

const TemplateList = () => {
  return (
    <div className={style.container}>
      <Header/>
      <div className={style.content}>
        <RectSize>
          <RectSize.Left>
            <Navigation/>
          </RectSize.Left>
          <RectSize.Right>
            <StaticResume/>
          </RectSize.Right>
        </RectSize>
      </div>
    </div>
  );
}
export default TemplateList;
