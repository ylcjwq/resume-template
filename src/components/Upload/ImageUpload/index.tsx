/**
 * @description 图片上传组件，基于 Input 二次封装
 * @author {pengdaokuan}
 */
import React from 'react';
import style from './index.module.scss';
import Upload from '../Upload';

interface ImageUploadProps extends TSUpload.Input {
  /**
   * @description 图标
   */
  icon?: any;
  /**
   * @description 文本
   */
  text?: any;
  /**
   * @description 是否阻止input点击之后显示文件管理器
   */
  preventInputManager?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
                                         icon,
                                         text = '上传头像',
                                         preventInputManager = false,
                                         onAfterClick = () => {},
                                         ...otherProps
                                       }) => {
  return (
    <div className={style.inputImageUploadWrapper} onClick={onAfterClick}>
      {!preventInputManager && (
        <div className={style.inputImageUploadInput}>
          <Upload {...otherProps} onAfterClick={() => {}} style={{ width: '112px', height: '152px' }} />
        </div>
      )}
      <div className={style.inputImageUploadBox}>
        <img src={icon} className={style.inputImageUploadIcon}  alt={''}/>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ImageUpload;