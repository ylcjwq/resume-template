import { useDispatch } from 'react-redux';
import {setCurrentTheme} from "@/store/modules/themeModel.ts";
/**
 * 更新当前选中的主题
 * @param {TSTheme.Item} theme 目标主题
 */
const useChangeCurrentTheme = () => {
  const dispatch = useDispatch();
  return (theme: TSTheme.Item) => {
    dispatch(setCurrentTheme(theme));
  };
}

export default useChangeCurrentTheme;