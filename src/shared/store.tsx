import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer as testReducer } from "../features/testFeatures/redux/reducer";

const reducer = combineReducers({
  testFeatures: testReducer,
});
export type RootState = ReturnType<typeof reducer>;

const middlewares = [thunk.withExtraArgument({} /* extraData */)];
const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middlewares),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
      : (arg: any) => arg
  )
);

export default store;
