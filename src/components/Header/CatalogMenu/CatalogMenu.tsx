import block from "bem-cn";

import SVG from "components/SVG";

import activeMenu from "./img/active.svg";
import nonactiveMenu from "./img/nonactive.svg";

import "./CatalogMenu.scss";

const b = block("catalog-button");

function CatalogMenu() {
  return (
    <div className={b()}>
      <SVG className={b("img")} svgProps={{ svg: activeMenu }} />
      <div className={b("text")}>каталог</div>
    </div>
  );
}

export default CatalogMenu;
