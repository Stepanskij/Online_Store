import block from "bem-cn";
import { IButtonProps } from "./types";

import "./Button.scss";

const b = block("button");

function Button(props: IButtonProps) {
  return (
    <div className={b()}>
      <button
        className={b("native-button")}
        type="button"
        onClick={props.onClick}
        {...props}
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;
