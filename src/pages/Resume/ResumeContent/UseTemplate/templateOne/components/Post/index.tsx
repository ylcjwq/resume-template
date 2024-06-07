/**
 * @desc 在校经历
 * @author pengdaokuan
 */
import './index.scss';

function Post() {
  return (
    <div className="content">
      <p className="label">在校经历 Post</p>
      <ul className="list">
        <li className="flex">
          <div className="left">
            <p>2019.09-2020.09</p>
            <p>学生保卫委员会会长</p>
          </div>
          <div className="right">
            <p>学生保卫委员会</p>
            <p>
              计划、组织、协调各年级学生组织的校园贩卖活动，承办好学校运动会。
            </p>
          </div>
        </li>
        <li className="flex">
          <div className="left">
            <p>2020.09-2022.04</p>
            <p>前端攻城狮</p>
          </div>
          <div className="right">
            <p>网络中心</p>
            <p>
              担任TickNet工作室前端工程师，与大学网络中心合作，围绕微信小程序开发或主导多个应用，任职期间基于微信小程序开发校内闲余市场，采用Vue.js主导开发，并与xxx科技有限公司合作，主导开发该公司官网及后台管理
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Post;
