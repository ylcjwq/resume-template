import { useState } from 'react';
import Button from '@/components/Button';
import style from './index.module.scss'

const Setting = () => {
  const [resumeSavePath, setResumeSavePath] = useState('');

  const onSave = () => {};
  return (
    <div className={style.container}>
      <p className={style.label}>修改简历数据储存路径</p>
      <div className={style.input}>
        <div className={style.value}>{resumeSavePath || '请选择存储路'}</div>
        <div className={style.updateBtn}>更改路径</div>
      </div>
    </div>
  );
}

export default Setting;