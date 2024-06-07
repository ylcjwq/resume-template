/**
 * @desc 简单介绍
 * @author pengdaokuan
 */
import './index.scss';

function Synopsis() {
  return (
    <div className="content">
      <p className="name">袁隆成</p>
      <p className="job">前端攻城狮</p>
      <p className="summary">
        {[
          '熟悉Vue与React全家桶，参与过大型项目开发，了解数据结构与算法',
          '掘金 lv3 博主，掘金文章 1w+ 阅读量，github blog 1+ star',
          '具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境',
          '具有代码洁癖，前后端分离，自我学习能力强，对新技术具有钻研精神',
        ].join('，')}
      </p>
    </div>
  );
}

export default Synopsis;
