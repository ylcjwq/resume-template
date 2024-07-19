import style from './index.module.scss'
import UseIcon from '@/assets/icon/use.png';
import ScrollBox from '@/components/ScrollBox';
import Button from '@/components/Button';
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {TemplateState} from "@/type/storeState.ts";
import {setSelectTemplate} from "@/store/modules/templateModel.ts";

const Navigation = () => {
  const dispatch = useDispatch();
  const HEADER_HEIGHT = 92;
  const [height, setHeight] = useState(window.innerHeight);
  const templateList: TSTemplate.Item[] = useSelector((state: TemplateState) => state.templateModel.templateList);
  const selectTemplate: TSTemplate.Item = useSelector((state: TemplateState) => state.templateModel.selectTemplate);

  // 监听窗口大小变化
  const handleResize = () => {
    setHeight(window.innerHeight); // 更新height状态
  };

  const onChangeTemplate = (template: TSTemplate.Item) => {
    dispatch(setSelectTemplate(template));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[])

  return (
    <div className={style.navigation}>
      <ScrollBox maxHeight={height - HEADER_HEIGHT}>
        {templateList &&
          templateList.length > 0 &&
          templateList.map((template: TSTemplate.Item) => {
            return (
              <div className={style.template} key={template?.templateId}>
                <img className={style.cover} src={template?.templateCover} alt={''}/>
                <div className={style.mask}>
                  {selectTemplate?.templateId === template?.templateId && (
                    <img className={style.use} src={UseIcon} alt={''}/>
                  )}
                  {selectTemplate?.templateId !== template?.templateId && (
                    <Button size="middle" className={style.viewBtn} onClick={() => { onChangeTemplate(template) }}>
                      预览模版
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
      </ScrollBox>
    </div>
  );
}

export default Navigation;
