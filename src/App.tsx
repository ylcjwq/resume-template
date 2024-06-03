import './style/index.scss'
import Logo from './assets/react.svg'
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  const clickToLick = (val: string) => {
    if(val === '介绍') {
      console.log("介绍");
    } else if (val === '简历') {
      navigate('/resume')
    } else {
      console.log(window.electron)
      window.electron.ipcRenderer.send("some-event","some message!")
      window.electron.shell.openExternal('https://gitee.com/')
    }
  }

  return (
      <>
        <div className={'root'}>
          <div className={'container'}>
            <img src={Logo} alt={""} />
            <div className={'title'}> 简历平台 </div>
            <div className={'tips'}> 一个模板简历制作平台，让你的简历更加出众 </div>
            <div className={'action'}>
              {['介绍', '简历', '源码'].map((item, index) => {
                return <div key={index} className={'item'} onClick={() => {clickToLick(item)}}>
                  {item}
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
