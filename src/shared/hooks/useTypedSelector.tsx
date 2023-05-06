import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "shared/store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
