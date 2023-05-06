import React from "react";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

//import { store /* , api */ } from "index";

import store from "../store";
import { AnyAction } from "redux";

// Infer the `IRootState` and `IAppDispatch` types from the store itself
export type IRootState = ReturnType<typeof store.getState>;

/* export type IApi = typeof api; */

// то что передается в редюсер при диспатче в санках
export interface IActionData<TDataType, TPayload> extends AnyAction {
  type: TDataType;
  payload?: TPayload;
}

export type IAppThunk<TDataType, TPayload, ReturnType = void> = ThunkAction<
  ReturnType,
  IRootState,
  {
    /* api: IApi */
  } /* unknown */,
  IActionData<TDataType, TPayload> /* AnyAction */
>;

export type IAction<TDataType, TPayload, TActionArgs> = (
  args: TActionArgs
) => IAppThunk<TDataType, TPayload>;
