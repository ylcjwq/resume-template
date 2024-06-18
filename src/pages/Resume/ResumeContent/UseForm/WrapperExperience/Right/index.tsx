import React from 'react';
import style from './index.module.scss';
import ScrollBox from '@/components/ScrollBox';

interface RightProps {
  children: React.ReactNode;
}

/**
 * 经验弹窗右侧
 * @param children
 * @constructor
 */
const Right = ({ children }: RightProps) => {
  const getChild = () => {
    const menuElement = (children as any)[0];
    const formElement = (children as any)[1][0];

    return [
      React.cloneElement(menuElement, {
        ...(children as object[])[0],
        key: 'menuElement',
      }),
      React.cloneElement(formElement, {
        ...(children as object[])[0],
        key: 'formElement',
      }),
    ];
  };
  return (
    <>
      <div className={style.header}>{getChild()[0]}</div>
      <div className={style.header}>
        <ScrollBox maxHeight={360}>{getChild()[1]}</ScrollBox>
      </div>
    </>
  );
}

export default Right;