import React, { useRef } from 'react';
import styles from './index.module.scss';
import FileEvent from '../fileEvent';

/**
 * 上传控件，默认自带的input样式
 * @param style
 * @param accept
 * @param multiple
 * @param visible
 * @param onAfterClick
 * @param onAfterChange
 * @constructor
 */
const Upload = ({ style, accept, multiple = false, visible = true, onAfterClick, onAfterChange }: TSUpload.Input) => {
  const inputSelectorRef = useRef(null);

  const onChange = (e: React.ChangeEvent) => {
    const fileList = e?.target?.files || [];
    if (e.target.value === '') {
      return;
    }
    const instance: TSUpload.File[] = [];
    for (const file of fileList) {
      instance.push(new FileEvent(file));
    }
    onAfterChange && onAfterChange(instance);
  }

  return (
    <input
      type="file"
      style={style}
      accept={accept}
      multiple={multiple}
      ref={inputSelectorRef}
      onClick={onAfterClick}
      onChange={onChange}
      className={`${styles.inputSelector} ${visible? styles.inputSelectorVisible: styles.inputSelectorHidden}`}
    />
  );
}

export default Upload;