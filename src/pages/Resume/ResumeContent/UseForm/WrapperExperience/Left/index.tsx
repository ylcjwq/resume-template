import style from './index.module.scss';
import Button from '@/components/Button';
import ScrollBox from '@/components/ScrollBox';
import List, { IListProps } from './List';

interface LeftProps extends IListProps {
  onAdd: () => void;
}

/**
 * 经验弹窗左侧
 * @param index
 * @param experienceList
 * @param onDelete
 * @param onAdd
 * @param onChange
 * @constructor
 */
const Left = ({ index, experienceList = [], onDelete, onAdd, onChange }: LeftProps) => {
  return (
    <div className={style.layoutLeft}>
      {experienceList.length > 0 && (
        <>
          <ScrollBox maxHeight={420}>
            <List index={index} experienceList={experienceList} onChange={onChange} onDelete={onDelete} />
          </ScrollBox>
          <div className={style.action}>
            <Button width={112} size="middle" onClick={onAdd}>
              添加条目
            </Button>
          </div>
        </>
      )}
      {experienceList.length === 0 && (
        <div className={style.empty}>
          <div className={style.emptyTips}>还没有内容，快添加一下吧～</div>
          <div className={style.emptyAction}>
            <Button width={112} size="middle" onClick={onAdd}>
              添加条目
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Left;