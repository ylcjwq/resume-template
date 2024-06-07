/**
 * @desc 基本信息
 * @author pengdaokuan
 */
import '@/pages/templates/styles/template-one.scss';

function BaseInfo() {
  return (
    <div className="container">
      <p className="title">基本信息 Basic</p>
      <ul className="content">
        <li>院校：湖南瞎说大学</li>
        <li>专业：软件工程</li>
        <li>学历：本科</li>
        <li>学年：2015.09 - 2019.06</li>
        <li>籍贯：海南·海口</li>
      </ul>
    </div>
  );
}

export default BaseInfo;
