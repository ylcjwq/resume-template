import {createSlice} from '@reduxjs/toolkit'

const templateModel = createSlice({
  name: 'templateModel',
  initialState: {
    resumeToolbarKeys: [],
  },
  reducers: {
    addTemplate: (state, action) => {
      state.resumeToolbarKeys = action.payload;
    }
  },
})

export const {addTemplate} = templateModel.actions;

const templateReducer = templateModel.reducer;
export default templateReducer;