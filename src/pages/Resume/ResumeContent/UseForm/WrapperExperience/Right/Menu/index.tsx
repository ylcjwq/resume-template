import style from './index.module.scss';
import { AdapterExperienceType } from '../../adapter';

interface MenuProps {
  /**
   * @description 当前是否处于编辑状态
   */
  isEdit: boolean;
  /**
   * @description 当前的条目
   */
  currentItem: AdapterExperienceType;
  /**
   * @description 点击取消
   */
  onCancelEditValue: () => void;
  /**
   * @description 点击保存
   */
  onSaveEditValue: () => void;
  /**
   * @description 点击编辑
   */
  onChangeEditStatus: () => void;
}

const Menu = ({ currentItem, isEdit, onCancelEditValue, onSaveEditValue, onChangeEditStatus }: MenuProps) => {
  return (
    <div className={style.menu}>
      <div className={style.left}>
        <div className={style.title}>{currentItem?.title}</div>
      </div>
      <div className={style.right}>
        {isEdit && (
          <>
            <div className={`${style.btn} ${style.cancel}`} onClick={onCancelEditValue}>
              取消
            </div>
            <div className={`${style.btn} ${style.save}`} onClick={onSaveEditValue}>
              保存
            </div>
          </>
        )}
        {!isEdit && (
          <div className={`${style.btn} ${style.cancel}`} onClick={onChangeEditStatus}>
            编辑
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;