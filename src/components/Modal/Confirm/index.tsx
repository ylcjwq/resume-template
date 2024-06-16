/**
 * @description 弹窗组件
 */
import style from './index.module.scss';
import Button from '@/components/Button';
import {IConfirmModal} from '../types';

function Confirm({title, width, className, description, renderFooter, config = {}, eleRef}: IConfirmModal) {
  const {deleteBtn = {isShow: false}, cancelBtn = {isShow: true}, submitBtn = {isShow: true}} = config;
  return (
    <div className={style.visMask}>
      <div className={style.center}>
        <div className={`${style.visConfirmBox} ${className}`} style={{width: width || 440}} ref={eleRef}>
          <div className={style.visConfirmContent}>
            <p className={style.visConfirmContentTitle}>{title || '友情提示'}</p>
            {description && <p className={style.visConfirmContentDesc}>{description}</p>}
          </div>
          {renderFooter || (
            <div className={style.visConfirmFooter}>
              {cancelBtn?.isShow && (
                <Button
                  size="middle"
                  className={`${style.visConfirmFooterBtn} ${style.visConfirmFooterCancelBtn}`}
                  onClick={() => {
                    cancelBtn?.callback && cancelBtn.callback();
                  }}
                >
                  {cancelBtn?.text || '取消'}
                </Button>
              )}
              {submitBtn?.isShow && (
                <Button
                  size="middle"
                  className={`${style.visConfirmFooterBtn} ${style.visConfirmFooterSubmitBtn}`}
                  onClick={() => {
                    submitBtn?.callback && submitBtn.callback();
                  }}
                >
                  {submitBtn?.text || '确定'}
                </Button>
              )}
              {deleteBtn?.isShow && (
                <Button
                  size="middle"
                  className={`${style.visConfirmFooterBtn} ${style.visConfirmFooterDeleteBtn}`}
                  onClick={() => {
                    deleteBtn?.callback && deleteBtn.callback();
                  }}
                >
                  {deleteBtn?.text || '退出'}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Confirm;