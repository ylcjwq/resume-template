import resumeReducer from "@/store/modules/resumeModel.ts";
import templateReducer from "@/store/modules/templateModel.ts";
import ThemeReducer from "@/store/modules/themeModel.ts";
import globalReducer from "@/store/modules/globalModel.ts";

export interface globalState {
  globalModel: ReturnType<typeof globalReducer>
}
export interface State {
  resumeModel: ReturnType<typeof resumeReducer>
}
export interface TemplateState {
  templateModel: ReturnType<typeof templateReducer>
}
export interface ThemeState {
  themeModel: ReturnType<typeof ThemeReducer>
}