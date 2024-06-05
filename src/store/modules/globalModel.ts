import { createSlice } from '@reduxjs/toolkit'

const globalModel = createSlice({
    name: "globalModel",
    initialState: {
        appName: '简历应用平台',
    },
    reducers: {

    }
})

const globalReducer = globalModel.reducer;

export default globalReducer;