import block from "bem-cn";

import SVG from "components/SVG";

import addressMarker from "./img/addressMarker.svg";

import "./FormLink.scss";

const b = block("delivery-address");

function FormLink() {
  return (
    <a className={b()} title="Уточните адрес доставки">
      <SVG className={b("img")} svgProps={{ svg: addressMarker }} />
      <text className={b("text")}>Уточните адрес доставки</text>
    </a>
  );
}

export default FormLink;
