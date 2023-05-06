import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as testActions from "../../features/testFeatures/redux/actions";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(testActions, dispatch);
};
