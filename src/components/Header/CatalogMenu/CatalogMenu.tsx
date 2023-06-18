import { useState } from "react";
import block from "bem-cn";

import SVG from "components/SVG";

import activeMenuSvg from "./img/active.svg";
import nonactiveMenuSvg from "./img/nonactive.svg";

import "./CatalogMenu.scss";

const b = block("catalog");

function CatalogMenu() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={b()}>
      <div
        className={b("button")}
        onClick={() => {
          setIsOpened((pre) => {
            return !pre;
          });
        }}
      >
        <div className={b("img-wrapper")}>
          <SVG
            className={b("img", { isOpened })}
            svgProps={{ svg: isOpened ? nonactiveMenuSvg : activeMenuSvg }}
          />
        </div>
        <div className={b("text")}>каталог</div>
      </div>
      {isOpened ? <div className={b("menu")}></div> : null}
    </div>
  );
}

export default CatalogMenu;
