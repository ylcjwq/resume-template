import {useState, useEffect} from 'react'
import ScrollBox from '@/components/ScrollBox'
import RESUME_TOOLBAR_LIST from '@/constants/resume.ts';
import style from './index.module.scss'

const ResumeToolbar = () => {
  const [addToolbarList, setAddToolbarList] = useState<TSResume.SliderItem[]>([]);
  const [unAddToolbarList, setUnAddToolbarList] = useState<TSResume.SliderItem[]>([]);

  useEffect(() => {
    if (RESUME_TOOLBAR_LIST.length > 0) {
      const _addToolbarList: TSResume.SliderItem[] = [];
      const _unAddToolbarList: TSResume.SliderItem[] = [];
      RESUME_TOOLBAR_LIST.forEach((s: TSResume.SliderItem) => {
        if (s.require) _addToolbarList.push(s);
        if (!s.require) _unAddToolbarList.push(s);
      });
      setAddToolbarList(_addToolbarList);
      setUnAddToolbarList(_unAddToolbarList);
    }
  }, []);

  const height = document.body.clientHeight;

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
                  <div className={style.box} key={addSlider.key}>
                    <div className={style.info}>
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
                  <div className={style.box} key={unAddSlider.key}>
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