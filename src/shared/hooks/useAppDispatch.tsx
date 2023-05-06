import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IRootState } from "shared/types/redux";

export const useAppDispatch: <TActionData extends AnyAction>() => ThunkDispatch<
  IRootState,
  {
    /* api: IApi */
  },
  TActionData
> = useDispatch;
