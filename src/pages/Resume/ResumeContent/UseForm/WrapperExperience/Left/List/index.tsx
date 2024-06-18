import React from 'react';
import style from './index.module.scss';
import { formatToString } from '@/utils/time.ts';
import DeleteIcon from '@/assets/icon/delete.png';
import { AdapterExperienceType } from '../../adapter';

export interface IListProps {
  /**
   * @description 当前操作索引下标
   */
  index: number;
  /**
   * @description 条目列表
   */
  experienceList: AdapterExperienceType[];
  /**
   * @description 删除回调
   */
  onDelete: (index: number) => void;
  /**
   * @description 选择条目回调
   */
  onChange: (index: number) => void;
}

const List = ({ index, experienceList, onDelete, onChange }: IListProps) => {

  return (
    <div className={style.experienceList}>
      {experienceList &&
        experienceList.length > 0 &&
        experienceList.map((item: AdapterExperienceType, i: number) => {
          return (
            <div
              className={`${style.experienceitem} ${i === index ? style.isSelect : ''} `}
              key={i}
              onClick={() => {
                onChange(i);
              }}
            >
              <div className={style.experienceItemBox}>
                <div className={style.experienceItemTitle}>{item.title}</div>
                <div className={style.experienceItemDate}>{formatToString(item?.date)}</div>
              </div>
              <div className={style.experienceItemAction}>
                <div
                  className={style.experienceDelete}
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation && e.stopPropagation();
                    onDelete(i);
                  }}
                >
                  <img src={DeleteIcon} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      {!experienceList ||
        (!experienceList.length && (
          <div className={style.empty}>
            <div className={style.emptyTips}>你还没有条目内容，快添加一条吧～</div>
          </div>
        ))}
    </div>
  );
}

export default List;