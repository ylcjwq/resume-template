import style from './index.module.scss'
import * as TemplateList from '@/pages/templates';
import Footer from '../Footer';
import ScrollBox from '@/components/ScrollBox';
import React, {useEffect, useState} from "react";
import { useSelector } from 'react-redux';
import Empty from '@/components/Empty';
import EmptyPng from '@/assets/icon/empty.png';
import Button from '@/components/Button';
import {TemplateState} from "@/type/storeState.ts";

// 合法且存在的简历模版
const VALID_TEMPLATE = [0];

const StaticResume = () => {
  const HEADER_HEIGHT = 76; // 距离头部距离
  const [height, setHeight] = useState(window.innerHeight);
  const selectTemplate: TSTemplate.Item = useSelector((state: TemplateState) => state.templateModel.selectTemplate);

  const isIncludeTemplate = VALID_TEMPLATE.includes(selectTemplate.templateIndex);
  const isValidTemplate = selectTemplate.templateId && selectTemplate.templateIndex !== -1;

  // 监听窗口大小变化
  const handleResize = () => {
    setHeight(window.innerHeight); // 更新height状态
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[])

  return (
    <div className={style.container}>
      <ScrollBox maxHeight={height - HEADER_HEIGHT}>
        {isValidTemplate && isIncludeTemplate && (
          <>
            {selectTemplate.templateIndex === 0 && <TemplateList.TemplateOne />}
            <Footer />
          </>
        )}

        {isValidTemplate && !isIncludeTemplate && <LackDesc label="暂未开发此模版，欢迎点击下方按钮进行模版贡献" />}
        {!isValidTemplate && <LackDesc label="暂无模版数据，欢迎点击下方按钮进行模版贡献" />}
      </ScrollBox>
    </div>
  );
}

export default StaticResume;

const LackDesc = React.memo(({ label }: { label: string }) => {
  return (
    <div className={style.empty}>
      <Empty imgSrc={EmptyPng} label={label} />
      <div className={style.footer}>
        <Button
          size="middle"
          className={style.useBtn}
          onClick={() => {
            window.electron.ipcRenderer.send("open",'https://gitee.com/yuan-longcheng/resume-template/issues/IAFGX5');
          }}
        >
          贡献模版
        </Button>
      </div>
    </div>
  );
});