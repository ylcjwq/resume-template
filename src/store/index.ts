import { configureStore } from '@reduxjs/toolkit';
import logger from "redux-logger";
import globalReducer from "./modules/globalModel.ts";
import resumeReducer from "@/store/modules/resumeModel.ts";

const store = configureStore({
  reducer: {
    globalModel: globalReducer,
    resumeModel: resumeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;