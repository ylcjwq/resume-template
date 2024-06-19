import {useState} from 'react'
import {useDispatch} from "react-redux";
import {addTemplate} from '@/store/modules/templateModel.ts'
import ScrollBox from '@/components/ScrollBox'
import RESUME_TOOLBAR_LIST from '@/constants/resume.ts';
import MessageDispatch, {MESSAGE_EVENT_NAME_MAPS} from '@/utils/messageDispatch.ts'
import style from './index.module.scss'
import useMount from "@/hooks/useMount.ts";
import useUnmount from "@/hooks/useUnmount.ts";

const ResumeToolbar = () => {
  const dispatch = useDispatch();
  const [addToolbarList, setAddToolbarList] = useState<TSResume.SliderItem[]>([]);
  const [unAddToolbarList, setUnAddToolbarList] = useState<TSResume.SliderItem[]>([]);
  const [height, setHeight] = useState(window.innerHeight);

  /**
   * 更新已添加模块的key
   * @param moduleKeys 添加的模块的key
   */
  const changeResumeToolbarKeys = (moduleKeys: string[]) => {
    dispatch(addTemplate(moduleKeys));
  }

  useMount(() => {
    if (RESUME_TOOLBAR_LIST.length > 0) {
      const _addToolbarList: TSResume.SliderItem[] = [];
      const _unAddToolbarList: TSResume.SliderItem[] = [];
      RESUME_TOOLBAR_LIST.forEach((item: TSResume.SliderItem) => {
        if (item.require) _addToolbarList.push(item);
        if (!item.require) _unAddToolbarList.push(item);
      });
      setAddToolbarList(_addToolbarList);
      setUnAddToolbarList(_unAddToolbarList);
      changeResumeToolbarKeys(_addToolbarList.map(item => item.key))
    }
    window.addEventListener('resize', handleResize)
  });

  useUnmount(() => {
    window.removeEventListener('resize', handleResize);
  })

  // 监听窗口大小变化
  const handleResize = () => {
    setHeight(window.innerHeight); // 更新height状态
  };

  /**
   * 添加模块
   * @param moduleToolbar 要添加的模块
   */
  const onAddSliderAction = (moduleToolbar: TSResume.SliderItem) => {
    setAddToolbarList([...addToolbarList, moduleToolbar]);
    const nextUnAddToolbarList = [...unAddToolbarList];
    nextUnAddToolbarList.splice(nextUnAddToolbarList.indexOf(moduleToolbar), 1);
    setUnAddToolbarList(nextUnAddToolbarList);
    changeResumeToolbarKeys([...addToolbarList, moduleToolbar].map((item: TSResume.SliderItem) => item.key))
  }
  /**
   * 删除模块
   * @param moduleToolbar 要删除的模块
   */
  const onDeleteSliderAction = (moduleToolbar: TSResume.SliderItem) => {
    setUnAddToolbarList([...unAddToolbarList, moduleToolbar]);
    const nextAddToolbarList = [...addToolbarList];
    nextAddToolbarList.splice(nextAddToolbarList.indexOf(moduleToolbar), 1);
    setAddToolbarList(nextAddToolbarList);
    changeResumeToolbarKeys(nextAddToolbarList.map((item: TSResume.SliderItem) => item.key))
  }

  return (
    <div className={style.slider}>
      <ScrollBox maxHeight={height - 180}>
        {!!addToolbarList.length && (
          <div className={style.module}>
            <div className={style.title}>
              <span className={style.line}/>
              已添加模块
            </div>
            <div className={style.content}>
              {addToolbarList.map((addSlider: TSResume.SliderItem) => {
                return (
                  <div className={style.box} key={addSlider.key} onClick={() => MessageDispatch.send(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, {
                    formName: addSlider.key,
                  })}>
                    <div className={style.info}>
                      {!addSlider.require && (
                        <div className={style.action}>
                          <i className={style.delete} onClick={(e: React.MouseEvent) => {
                            e.stopPropagation && e.stopPropagation();
                            onDeleteSliderAction(addSlider);
                          }}/>
                        </div>
                      )}
                      <i className={style.icon}/>
                      <div className={style.text}>
                        <div className={style.name}>{addSlider.name}</div>
                        <div className={style.summary}>{addSlider.summary}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {!!unAddToolbarList.length && (
          <div className={style.module}>
            <div className={style.title}>
              <span className={style.line}/>
              未添加模块
            </div>
            <div className={style.content}>
              {unAddToolbarList.map((unAddSlider: TSResume.SliderItem) => {
                return (
                  <div className={style.box} key={unAddSlider.key} onClick={() => {onAddSliderAction(unAddSlider)}}>
                    <div className={style.info}>
                      <i className={style.icon}/>
                      <div className={style.text}>
                        <div className={style.name}>{unAddSlider.name}</div>
                        <div className={style.summary}>{unAddSlider.summary}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </ScrollBox>
    </div>
  );
}
export default ResumeToolbar;