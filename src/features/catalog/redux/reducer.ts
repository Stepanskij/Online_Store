import { IBCActionData, BCActionDataTypes, IBCState } from "./types";
import { initState } from "./init";

export const reducer = (state = initState, action: IBCActionData): IBCState => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
