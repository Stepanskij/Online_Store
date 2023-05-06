import { IBCActionData, BCActionDataTypes, IBCState } from "./types";
import { initState } from "./init";

export const reducer = (state = initState, action: IBCActionData): IBCState => {
  switch (action.type) {
    case BCActionDataTypes.TEST_TYPE: {
      const testActionArg =
        action.payload?.[BCActionDataTypes.TEST_TYPE]?.testActionArg;
      if (testActionArg !== undefined) {
        return {
          ...state,
          testProperty: testActionArg,
        };
      }
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};
