import { useState } from 'react';
import style from './index.module.scss'

const Setting = () => {
  const [resumeSavePath, setResumeSavePath] = useState('');

  const onChangePath = () => {
    window.electron.ipcRenderer.send('open-save-resume-path', '');
    window.electron.ipcRenderer.on('save-resume-path-reply', (_, arg: string) => {
      if(arg) {
        setResumeSavePath(arg);
      } else {
        new Error('自定义存储路径失败！')
      }
    })
  };
  return (
    <div className={style.container}>
      <p className={style.label}>修改简历数据储存路径</p>
      <div className={style.input}>
        <div className={style.value}>{resumeSavePath || '请选择存储路'}</div>
        <div className={style.updateBtn} onClick={onChangePath}>更改路径</div>
      </div>
    </div>
  );
}

export default Setting;