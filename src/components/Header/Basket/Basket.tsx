import block from "bem-cn";

import SVG from "components/SVG";

import basketSvg from "./img/basket.svg";

import "./Basket.scss";

const b = block("basket");

function Basket() {
  return (
    <a className={b()}>
      <SVG className={b("img")} svgProps={{ svg: basketSvg }} />
      <div className={b("text")}>Корзина</div>
    </a>
  );
}

export default Basket;
