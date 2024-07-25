import {createSlice} from '@reduxjs/toolkit'

const templateModel = createSlice({
  name: 'templateModel',
  initialState: {
    resumeToolbarKeys: [],
    templateList: [],
    selectTemplate: {
      templateId: '',
      templateName: '',
      templateIndex: '',
      templateCover: '',
    },
  },
  reducers: {
    addTemplate: (state, action) => {
      state.resumeToolbarKeys = action.payload;
    },
    setTemplateList: (state, action) => {
      state.templateList = action.payload;
    },
    setSelectTemplate: (state, action) => {
      state.selectTemplate = action.payload;
    }
  },
})

export const {addTemplate, setTemplateList, setSelectTemplate} = templateModel.actions;

const templateReducer = templateModel.reducer;
export default templateReducer;