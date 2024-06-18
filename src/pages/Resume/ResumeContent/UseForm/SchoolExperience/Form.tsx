import style from './index.module.scss';
import Input from '@/components/Input';
import { AdapterExperienceType } from '../WrapperExperience/adapter';

interface IProps {
  isDisable?: boolean;
  currentItem?: AdapterExperienceType;
  onChangeCurrentItem?: (newItem: AdapterExperienceType) => void;
}
function Form({ isDisable, currentItem, onChangeCurrentItem }: IProps) {
  const onChangeValue = (key: string, value: string) => {
    const newItem = { ...currentItem, [key]: value };
    onChangeCurrentItem && onChangeCurrentItem(newItem);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.flex}>
        <div className={style.left}>
          <span className={style.require}>*</span>
          <span>部 门 ：</span>
        </div>
        <div className={style.right}>
          <Input
            onChange={(e) => onChangeValue('title', e.target.value)}
            value={currentItem?.title}
            placeholder="请输入在校时的部门"
            allowClear={!isDisable}
            disabled={isDisable}
          />
        </div>
      </div>
      <div className={style.flex}>
        <div className={style.left}>
          <span className={style.require}>*</span>
          <span>职 务 ：</span>
        </div>
        <div className={style.right}>
          <Input
            onChange={(e) => onChangeValue('post', e.target.value)}
            value={currentItem?.post}
            placeholder="在部门中担任什么职位"
            allowClear={!isDisable}
            disabled={isDisable}
          />
        </div>
      </div>
      <div className={style.flex}>
        <div className={style.left}>
          <span className={style.require}>*</span>
          <span>时 间 ：</span>
        </div>
        <div className={style.right}>
          <Input
            onChange={(e) => onChangeValue('beginTime', e.target.value)}
            value={currentItem?.beginTime}
            placeholder="开始时间"
            allowClear={!isDisable}
            style={{width: 290}}
            disabled={isDisable}
          />
          <span className={style.line}>-</span>
          <Input
            onChange={(e) => onChangeValue('endTime', e.target.value)}
            value={currentItem?.endTime}
            placeholder="结束时间"
            allowClear={!isDisable}
            style={{width: 290}}
            disabled={isDisable}
          />
        </div>
      </div>
      <div className={style.flex}>
        <div className={style.left}>
          <span className={style.require}>*</span>
          <span>内 容 ：</span>
        </div>
        <div className={style.right}>
          <Input
            type="textarea"
            onChange={(e) => onChangeValue('content', e.target.value)}
            rows={5}
            value={currentItem?.content}
            placeholder="任职期间主要工作是什么呢？"
            allowClear={!isDisable}
            disabled={isDisable}
          />
        </div>
      </div>
    </div>
  );
}

export default Form;