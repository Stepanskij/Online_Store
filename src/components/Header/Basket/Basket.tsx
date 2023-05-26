import block from "bem-cn";

import SVG from "components/SVG";

import basketImg from "./img/basket.svg";

import "./Basket.scss";

const b = block("basket");

function Basket() {
  return (
    <a className={b()}>
      <SVG className={b("img")} svgProps={{ svg: basketImg }} />
      <text className={b("text")}>Корзина</text>
    </a>
  );
}

export default Basket;
