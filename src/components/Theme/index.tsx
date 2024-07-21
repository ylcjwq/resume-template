import style from './index.module.scss'
import {useSelector} from 'react-redux'
import {ThemeState} from "@/type/storeState.ts";
import useCurrentTheme from "@/hooks/useCurrentTheme";

const Theme = () => {
  const themeList = useSelector((state: ThemeState) => state.themeModel.themeList);
  const [currentTheme, changeTheme] = useCurrentTheme.useGetCurrentTheme();
  console.log(themeList)

  return (
    <div className={style.box}>
      {themeList.length > 0 &&
      [...themeList].map((item: TSTheme.Item, index: number) => {
        return (
          <span
            key={index}
            style={{backgroundColor: item.backgroundColor}}
            className={`${currentTheme.id === item.id ? style.active : ''}`}
            onClick={() => {
              changeTheme && changeTheme(item);
            }}
          />
        )
      })}
    </div>
  )
}

export default Theme