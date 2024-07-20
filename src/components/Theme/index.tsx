import React from "react";
import style from './index.module.scss'

interface IProps {
  themeList: TSTheme.Item[];
  currentTheme: TSTheme.Item;
  onChangeTheme: (theme: TSTheme.Item) => void;
}

const Theme: React.FC<IProps> = ({ themeList= [], currentTheme, onChangeTheme }) => {

  return (
    <div className={style.box}>
      {themeList.length > 0 &&
      themeList.map((item: TSTheme.Item, index: number) => {
        return (
          <span
            key={index}
            style={{backgroundColor: item.backgroundColor}}
            className={`${currentTheme.id === item.id ? style.active : ''}`}
            onClick={() => {
              onChangeTheme && onChangeTheme(item);
            }}
          />
        )
      })}
    </div>
  )
}

export default Theme