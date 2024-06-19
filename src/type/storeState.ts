import resumeReducer from "@/store/modules/resumeModel.ts";
import templateReducer from "@/store/modules/templateModel.ts";

export interface State {
  resumeModel: ReturnType<typeof resumeReducer>
}
export interface TemplateState {
  templateModel: ReturnType<typeof templateReducer>
}