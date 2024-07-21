import './style/index.scss'
import Logo from './assets/react.svg'
import { useNavigate } from "react-router";
import CHECK_HOME_ITEM from "./constants/checkHomeItem.ts";
import type HomeCheck from './type/homeCheck.ts'
import {isHttpOrHttpsUrl} from "./utils/checkItem.ts";
import { useSelector } from 'react-redux'
import {globalState} from "@/type/storeState.ts";
import Theme from '@/components/Theme';
import useCurrentTheme from "@/hooks/useCurrentTheme";

function App() {
  const navigate = useNavigate();
  const [currentTheme] = useCurrentTheme.useGetCurrentTheme();

  const clickToLick = (val: HomeCheck) => {
    if(isHttpOrHttpsUrl(val.url)) {
      // 给主进程发送消息
      window.electron.ipcRenderer.send("open",val.url);
    } else {
      navigate(val.url);
    }
  }

  const { appName } = useSelector((state: globalState) => state.globalModel)

  return (
      <>
        <div className={'root'} style={{ backgroundColor: currentTheme?.backgroundColor }}>
          <div className={'containerHome'}>
            <img src={Logo} alt={""}/>
            <div className={'title'}> {appName} </div>
            <div className={'tips'}> 一个模板简历制作平台，让你的简历更加出众</div>
            <div className={'theme'}>
              <Theme/>
            </div>
            <div className={'action'}>
              {CHECK_HOME_ITEM.map((item: HomeCheck) => {
                return <div key={item.key} className={'item'} onClick={() => {
                  clickToLick(item)
                }}>
                  {item.text}
                </div>
              })}
            </div>
            <div className={'copyright'}>
              <div className={'footer'}>
                <p className={'copyright'}>
                  Copyright © 2024-{new Date().getFullYear()} All Rights Reserved. Copyright By ylc
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default App
