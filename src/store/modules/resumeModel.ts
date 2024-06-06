import { createSlice } from '@reduxjs/toolkit'

const resumeModel = createSlice({
    name: "resumeModel",
    initialState: {
        appName: '简历应用平台',
    },
    reducers: {

    }
})

const resumeReducer = resumeModel.reducer;

export default resumeReducer;