import block from "bem-cn";

import SVG from "components/SVG";

import activeMenuSvg from "./img/active.svg";
import nonactiveMenuSvg from "./img/nonactive.svg";

import "./CatalogMenu.scss";

const b = block("catalog-button");

function CatalogMenu() {
  return (
    <div className={b()}>
      <SVG className={b("img")} svgProps={{ svg: activeMenuSvg }} />
      <div className={b("text")}>каталог</div>
    </div>
  );
}

export default CatalogMenu;
