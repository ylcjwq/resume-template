import resumeReducer from "@/store/modules/resumeModel.ts";

export interface State {
  resumeModel: ReturnType<typeof resumeReducer>
}