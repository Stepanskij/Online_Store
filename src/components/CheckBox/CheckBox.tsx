import block from "bem-cn";
import { ICheckBoxProps } from "./types";

import SVG from "components/SVG";

import "./CheckBox.scss";
import checkboxMarkerSvg from "./img/checkboxMarker.svg";

const b = block("checkbox");

function CheckBox(props: ICheckBoxProps) {
  return (
    <label className={b()}>
      <input
        className={b("native-checkbox")}
        type="checkbox"
        {...props}
        onClick={(e) => {
          e.stopPropagation();
          props.onChecked();
        }}
      />
      <div className={b("checkbox-square")}></div>
      <SVG
        className={b("checkbox-marker")}
        svgProps={{ svg: checkboxMarkerSvg }}
      />
    </label>
  );
}

export default CheckBox;
