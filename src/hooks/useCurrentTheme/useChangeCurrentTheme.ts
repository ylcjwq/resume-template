import { useDispatch } from 'react-redux';
import {setCurrentTheme} from "@/store/modules/themeModel.ts";
import useUpdateAppConfigThemeFile from "@/hooks/useCurrentTheme/useUpdateAppConfigThemeFile.ts";
/**
 * 更新当前选中的主题
 * @param {TSTheme.Item} theme 目标主题
 */
const useChangeCurrentTheme = () => {
  const dispatch = useDispatch();
  const UpdateAppConfigThemeFile = useUpdateAppConfigThemeFile();

  return (theme: TSTheme.Item) => {
    UpdateAppConfigThemeFile('currentTheme', theme);
    dispatch(setCurrentTheme(theme));
  };
}

export default useChangeCurrentTheme;