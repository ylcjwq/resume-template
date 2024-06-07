/**
 * @desc 模板1
 * @author pengdaokuan
 */
import './index.scss';
import Avatar from './components/Avatar';
import BaseInfo from './components/BaseInfo';
import Contact from './components/Contact';
import Job from './components/Job';
import Certificate from './components/Certificate';
import Synopsis from './components/Synopsis';
import Skill from './components/Skill';
import Post from './components/Post';
import Project from './components/Project';
import Work from './components/Work';

const TemplateOne = () => {
  return (
    <div className="a4-box">
      <div className="flex container" id="visPdf">
        {/* 左侧 */}
        <div className="left">
          <div className="avatar">
            <Avatar />
          </div>
          <div className="fillColor" />
          <div className="baseData">
            <BaseInfo />
            <Contact />
            <Job />
            <Certificate />
          </div>
        </div>
        {/* 内容 */}
        <div className="center">
          <Synopsis />
          <div className="listData">
            <Skill />
            <Post />
            <Project />
            <Work />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateOne;
