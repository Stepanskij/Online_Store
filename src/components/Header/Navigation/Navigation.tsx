import { Link, Outlet } from "react-router-dom";
import block from "bem-cn";

import "./Navigation.scss";

const b = block("navigation");

function Navigation() {
  return (
    <div className={b()}>
      <Link className={b("delivery")} title="Доставка" to="/delivery">
        Доставка
      </Link>
      <Link className={b("how-pay")} title="Оплата заказов" to="/how-pay">
        Оплата заказов
      </Link>
      <Link className={b("how-buy")} title="Как купить" to="/how-buy">
        Как купить
      </Link>
      <Link
        className={b("telephone")}
        title="Телефон поддержки"
        to="/telephone"
      >
        8 888 888 88 88
      </Link>
    </div>
  );
}

export default Navigation;
