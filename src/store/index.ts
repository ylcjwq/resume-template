import { configureStore } from '@reduxjs/toolkit'
import globalReducer from "./modules/globalModel.ts";

const store = configureStore({
  reducer: {
    globalModel: globalReducer,
  },
});

export default store;