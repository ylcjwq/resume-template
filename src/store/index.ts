import { configureStore } from '@reduxjs/toolkit';
import logger from "redux-logger";
import globalReducer from "./modules/globalModel.ts";
import templateReducer from "@/store/modules/templateModel.ts";

const store = configureStore({
  reducer: {
    globalModel: globalReducer,
    templateModel: templateReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;