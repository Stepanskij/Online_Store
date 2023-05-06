import React from "react";
import { useDispatch, useSelector } from "react-redux";
import block from "bem-cn";

import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { useTypedSelector } from "shared/hooks/useTypedSelector";
//import { useActions } from "shared/hooks/useActions";

import * as testActions from "../../features/testFeatures/redux/actions";

import "./App.scss";

const b = block("test-block");

function App() {
  const dispatch = useAppDispatch();
  //const { testAction } = useActions();

  const { catalog, testProperty } = useTypedSelector(
    (state) => state.testFeatures
  );

  return (
    <div
      className={b()}
      onClick={() => {
        dispatch(testActions.testAction());
      }}
    >
      GOVNO
    </div>
  );
}

export default App;
