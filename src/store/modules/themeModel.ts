import {createSlice} from '@reduxjs/toolkit'

export interface TStore {
  /**
   * @description 主题列表
   */
  themeList: TSTheme.Item[];
  /**
   * @description 当前选中的主题
   */
  currentTheme: TSTheme.Item;
}

const themeModel = createSlice({
  name: 'themeModel',
  initialState: {
    themeList: [],
    currentTheme: {
      id: '',
      fontColor: '',
      backgroundColor: '',
    },
  } as TStore,
  reducers: {
    setThemeList: (state, action) => {
      state.themeList = action.payload;
    },
    setCurrentTheme: (state, action) => {
      state.currentTheme = action.payload;
    }
  }
})

export const {setThemeList, setCurrentTheme } = themeModel.actions;

const themeReducer = themeModel.reducer;
export default themeReducer;