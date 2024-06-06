import { configureStore } from '@reduxjs/toolkit'
import globalReducer from "./modules/globalModel.ts";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    globalModel: globalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;