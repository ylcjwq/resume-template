/**
 * @desc 项目经历
 * @author pengdaokuan
 * @createTime 2021-03-22
 * @lastModify 2021-03-22
 */
import './index.scss';

function Project() {
  return (
    <div className="content">
      <p className="label">项目经历 Project</p>
      <ul className="list">
        <li className="flex">
          <div className="left">
            <p>
              <span>2021.03 - 2021.05</span>
            </p>
          </div>
          <div className="right">
            <p>
              <span>可视化简历平台 -前端工程师</span>
            </p>
          </div>
          <div className="text">
            <ul className="item-box">
              <li className="item-content">
                <span>Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版</span>
              </li>
              <li className="item-content">
                <span>通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档</span>
              </li>
              <li className="item-content">
                <span>通过可视化拖拽形式，自定义组件模版</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Project;
