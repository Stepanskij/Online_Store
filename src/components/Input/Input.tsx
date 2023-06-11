import block from "bem-cn";
import { IInputProps } from "./types";

import "./Input.scss";

const b = block("input");

function Input(props: IInputProps) {
  return (
    <div className={b()}>
      <input className={b("native-input")} {...props} />
    </div>
  );
}

export default Input;
