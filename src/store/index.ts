import { configureStore } from '@reduxjs/toolkit';
import logger from "redux-logger";
import globalReducer from "./modules/globalModel.ts";
import templateReducer from "@/store/modules/templateModel.ts";
import resumeReducer from "@/store/modules/resumeModel.ts";
import themeReducer from "@/store/modules/themeModel";


const store = configureStore({
  reducer: {
    globalModel: globalReducer,
    templateModel: templateReducer,
    resumeModel: resumeReducer,
    themeModel: themeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;