import block from "bem-cn";

import "./Navigation.scss";

const b = block("navigation");

function Navigation() {
  return (
    <div className={b()}>
      <a className={b("delivery")} title="Доставка">
        Доставка
      </a>
      <a className={b("pay")} title="Оплата заказов">
        Оплата заказов
      </a>
      <a className={b("buy")} title="Как купить">
        Как купить
      </a>
      <div className={b("telephone")} title="Телефон поддержки">
        8 888 888 88 88
      </div>
    </div>
  );
}

export default Navigation;
