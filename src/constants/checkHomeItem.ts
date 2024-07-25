import type HomeCheck from '../type/homeCheck.ts'

export const ROUTER_KEY = {
  root: 'root',
  resume: 'resume',
  templateList: 'templateList',
};

const CHECK_HOME_ITEM: HomeCheck[] = [
  {
    url: 'https://gitee.com/yuan-longcheng/resume-template/blob/master/README.md',
    key: 'intro',
    text: '介绍',
  },
  {
    url: '/resume?index=0&fromPath=',
    key: 'resume',
    text: '简历',
  },
  {
    url: '/templateList',
    key: 'templateList',
    text: '模板',
  },
  {
    url: 'https://gitee.com/yuan-longcheng/resume-template',
    key: 'code',
    text: '源码',
  },
];

export default CHECK_HOME_ITEM