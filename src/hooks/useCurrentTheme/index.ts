import { useSelector } from 'react-redux';
import {ThemeState} from "@/type/storeState.ts";
import useChangeCurrentTheme from "@/hooks/useCurrentTheme/useChangeCurrentTheme.ts";
import useSelectTheme from "@/hooks/useCurrentTheme/useSelectTheme.ts";
import useReadAppConfigThemeFile from "@/hooks/useCurrentTheme/useReadAppConfigThemeFile.ts";

/**
 * 获取当前主题与修改组件方法
 */
const useGetCurrentTheme = () => {
  const changeTheme = useChangeCurrentTheme();
  const currentTheme = useSelector((state: ThemeState) => state.themeModel.currentTheme);
  return [currentTheme, changeTheme] as [TSTheme.Item, (theme: TSTheme.Item) => void];
}

/**
 * 初始化读取主题配置文件
 */
const useInitThemeConfig = () => {
  const selectTheme = useSelectTheme();
  const readAppConfigThemeFile = useReadAppConfigThemeFile();
  return () => {
    readAppConfigThemeFile().then((value: { [key: string]: string }) => {
      selectTheme(value);
    });
  };
}


export default {
  useGetCurrentTheme,
  useInitThemeConfig,
};