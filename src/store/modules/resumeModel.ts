import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const resumeModel = createSlice({
  name: "resumeModel",
  initialState: {
    base: {
      avatar: '',
      username: '袁隆成',
      area: '广东·珠海',
      school: '亚洲皇家学府',
      major: '计算机科学与技术',
      degree: '本科',
      hometown: '广东',
      onSchoolTime: {
        beginTime: '2019.09',
        endTime: '2023.06',
      },
    },
    contact: {
      phone: '152****2846',
      email: '756885686@qq.com',
      github: 'https://gitee.com/yuan-longcheng',
      juejin: 'https://juejin.cn/user/231316642338253',
    },
    work: {
      job: '前端攻城狮',
      city: '广州｜珠海',
      cityList: ['广州', '珠海'],
    },
    hobby: '篮球、乒乓球、游戏',
    skill:
      '熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码｜熟悉 React，了解并使用 Hooks 特性，阅读过 redux 源码｜阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库｜了解 Vscode，开发过Vscode插件｜了解 Webpack 编译原理，了解 babel 转码原理｜了解 Electron，了解 Node.js 以及 Git 团队协作开发工具｜了解设计模式，对于特定场景，能采用合适的设计模式进行解决｜了解 MYSQL，了解数据库优化常用方法｜了解基础数据结构与算法，了解Python',
    skillList: [
      '熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码',
      '熟悉 React，了解并使用 Hooks 特性，阅读过 redux 源码',
      '阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库',
      '了解 Vscode，开发过Vscode插件',
      '了解 Webpack 编译原理，了解 babel 转码原理',
      '了解 Electron，了解 Node.js 以及 Git 团队协作开发工具',
      '了解设计模式，对于特定场景，能采用合适的设计模式进行解决',
      '了解 MYSQL，了解数据库优化常用方法',
      '了解基础数据结构与算法，了解Python',
    ],
    evaluation:
      '熟悉Vue与React全家桶，参与过大型项目开发，了解数据结构与算法| 掘金 lv2 博主，掘金文章 1k+ 阅读量，github blog 1+ star | 具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境|具有代码洁癖，前后端分离，自我学习能力强，对新技术具有钻研精神',
    evaluationList: [
      '熟悉Vue与React全家桶，参与过大型项目开发，了解数据结构与算法',
      '掘金 lv2 博主，掘金文章 1k+ 阅读量，github blog 1+ star',
      '具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境。',
      '具有代码洁癖，前后端分离，自我学习能力强，对新技术具有钻研精神',
    ],
    certificate: '广州第一届拼搏杯大赛参与奖',
    certificateList: ['广州第一届拼搏杯大赛参与奖'],
    schoolExperience: [
      {
        beginTime: '2019.09',
        endTime: '2020.09',
        post: '学生保卫委员会会长',
        department: '学生保卫委员会',
        content:
          '计划、组织、协调各年级学生组织的校园贩卖活动｜承办好学校运动会',
        parseContent: [
          '计划、组织、协调各年级学生组织的校园贩卖活动',
          '承办好学校运动会',
        ],
      },
    ],
    workExperience: [
      {
        beginTime: '2020.09',
        endTime: '2021.04',
        post: '前端攻城狮',
        department: '亚洲皇家学府',
        content:
          '担任TickNet工作室前端工程师，与湖南瞎说大学网络中心合作，围绕微信企业号开发或主导多个应用｜任职期间基于微信企业号开发校内闲余市场，采用Vue.js主导开发，并与xxx科技有限公司合作，主导开发该公司官网及后台管理',
        parseContent: [
          '担任TickNet工作室前端工程师，与湖南瞎说大学网络中心合作，围绕微信企业号开发或主导多个应用',
          '任职期间基于微信企业号开发校内闲余市场，采用Vue.js主导开发，并与xxx科技有限公司合作，主导开发该公司官网及后台管理',
        ],
      },
    ],
    projectExperience: [
      {
        beginTime: '2023.03',
        endTime: '2023.05',
        projectName: '可视化简历平台',
        post: '前端攻城狮',
        content:
          'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版｜通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档｜通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版',
        parseContent: [
          'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版',
          '通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档',
          '通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版',
        ],
        date: 1621145137865,
      },
    ],
  },
  reducers: {
    setBase: (state, action: PayloadAction<any>) => {
      state.base = action.payload;
    },
    setContact: (state, action: PayloadAction<any>) => {
      state.contact = action.payload;
    },
    setWork: (state, action: PayloadAction<any>) => {
      state.work = action.payload;
    }
  }
})

export const {
  setBase,
  setContact,
  setWork,
} = resumeModel.actions;

const resumeReducer = resumeModel.reducer;

export default resumeReducer;