import { $CombinedState } from "redux";
import { IBCAction, BCActionDataTypes } from "./types";

export const testAction: IBCAction<void> =
  () => async (dispatch, getState, extra) => {
    const state = getState();
    if (state.testFeatures.testProperty === false) {
      dispatch({
        type: BCActionDataTypes.TEST_TYPE,
        payload: {
          [BCActionDataTypes.TEST_TYPE]: {
            testActionArg: true,
          },
        },
      });
    } else {
      dispatch({
        type: BCActionDataTypes.TEST_TYPE,
        payload: {
          [BCActionDataTypes.TEST_TYPE]: {
            testActionArg: false,
          },
        },
      });
    }
  };
