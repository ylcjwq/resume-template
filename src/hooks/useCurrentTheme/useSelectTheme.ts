import {useDispatch} from "react-redux";
import _ from "lodash";
import {setCurrentTheme, setThemeList} from "@/store/modules/themeModel.ts";

/**
 * 对比上一轮的选中的主题皮肤
 */
function useSelectTheme() {
  const dispatch = useDispatch();

  return (themeConfigValues: any) => {
    const prevTheme: string = themeConfigValues?.currentTheme.id || '';
    const initTheme = { id: 'dark', fontColor: '#ffffff', backgroundColor: '#27292c' };
    let nextTheme: TSTheme.Item;
    console.log(prevTheme)
    if (themeConfigValues?.themeList.length > 0) {
      if (prevTheme) {

        nextTheme = _.find(themeConfigValues?.themeList, { id: prevTheme }) || initTheme;
      } else {
        nextTheme = themeConfigValues?.themeList[0];
      }
    } else {
      nextTheme = initTheme;
    }

    console.log(nextTheme)
    dispatch(setThemeList(themeConfigValues?.themeList));
    dispatch(setCurrentTheme(nextTheme));

  };
}

export default useSelectTheme