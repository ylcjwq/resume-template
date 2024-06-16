/**
 * @description 弹窗组件
 */
import style from './index.module.scss';
import Button from '@/components/Button';
import {IDialogModal} from '../types';

function Dialog({
                  title,
                  width,
                  className,
                  showFooter,
                  renderFooter,
                  config = {},
                  eleRef,
                  children,
                  childStyle,
                }: IDialogModal) {
  const {cancelBtn = {isShow: true}, submitBtn = {isShow: true}} = config;
  return (
    <div className={style.visMask}>
      <div className={style.center}>
        <div className={`${style.visDialogBox} ${className}`} style={{width: width || 760}} ref={eleRef}>
          <div className={style.visDialogHeader}>{title || '简历模板平台 提示您'}</div>
          <div
            className={style.visDialogClose}
            onClick={() => {
              cancelBtn?.callback && cancelBtn.callback();
            }}
          />
          <div className={style.visDialogContent} style={childStyle}>
            {children}
          </div>
          {showFooter &&
            (renderFooter || (
              <div className={style.visDialogFooter}>
                {cancelBtn?.isShow && (
                  <Button
                    size="middle"
                    className={`${style.visDialogFooterBtn} ${style.visDialogFooterCancelBtn}`}
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
                    className={`${style.visDialogFooterBtn} ${style.visDialogFooterSubmitBtn}`}
                    onClick={() => {
                      submitBtn?.callback && submitBtn.callback();
                    }}
                  >
                    {submitBtn?.text || '确定'}
                  </Button>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Dialog;