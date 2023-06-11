import { $CombinedState } from "redux";
import { IBCAction, BCActionDataTypes } from "./types";

export const testAction: IBCAction<void> =
  () => async (dispatch, getState, extra) => {};
