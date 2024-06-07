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
        <li>院校：亚洲皇家学府</li>
        <li>专业：计算机科学与技术</li>
        <li>学历：本科</li>
        <li>学年：2019.09 - 2023.06</li>
        <li>籍贯：广东·珠海</li>
      </ul>
    </div>
  );
}

export default BaseInfo;
