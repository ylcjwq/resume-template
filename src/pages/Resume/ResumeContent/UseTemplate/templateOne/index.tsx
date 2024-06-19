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
import { useSelector } from 'react-redux';
import { RESUME_TOOLBAR_MAPS } from '@/constants/resume.ts';
import {State, TemplateState} from "@/type/storeState.ts";

const TemplateOne = () => {

  // 👇 获取简历信息数据
  const base: TSResume.Base = useSelector((state: State) => state.resumeModel.base);
  // 👇 获取工具条模块 keys
  const resumeToolbarKeys: string[] = useSelector((state: TemplateState) => state.templateModel.resumeToolbarKeys);

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
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.contact) && <Contact/>}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workPrefer) && <Job/>}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.certificate) && <Certificate />}
          </div>
        </div>
        {/* 内容 */}
        <div className="center">
          {(resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.evaluation) || base?.username) && <Synopsis />}
          <div className="listData">
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.skill) && <Skill />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.schoolExperience) && <Post />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.projectExperience) && <Project />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workExperience) && <Work />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateOne;
