import block from "bem-cn";

import SVG from "components/SVG";

import appGalleryLinkSvg from "./img/appGalleryLink.svg";
import appStoreLinkSvg from "./img/appStoreLink.svg";
import googlePlayLinkSvg from "./img/googlePlayLink.svg";
import vkLinkSvg from "./img/vkLink.svg";

import "./Footer.scss";

const b = block("footer");

function Footer() {
  return (
    <div className={b()}>
      <div className={b("links")}>
        <SVG className={b("img-vk")} svgProps={{ svg: vkLinkSvg }}></SVG>
        <SVG
          className={b("img-apple-store")}
          svgProps={{ svg: appStoreLinkSvg }}
        ></SVG>
        <SVG
          className={b("img-google")}
          svgProps={{ svg: googlePlayLinkSvg }}
        ></SVG>
        <SVG
          className={b("img-apple-gallery")}
          svgProps={{ svg: appGalleryLinkSvg }}
        ></SVG>
      </div>
      <div className={b("information-colum-1")}>
        <a className={b("about-store")}>О магазине</a>
        <a className={b("delivery")}>Доставка</a>
        <a className={b("pay")}>Оплата заказов</a>
        <a className={b("buy")}>Как купить</a>
      </div>
      <div className={b("information-colum-2")}>
        <a className={b("refund-and-exchange")}>Возврат и обмен</a>
        <a className={b("user-agreement")}>Пользовательское соглашение</a>
        <a className={b("contacts")}>Контакты</a>
      </div>
      <div className={b("information-colum-3")}>
        <div className={b("email")}>
          <div className={b("email-text")}>Свяжитесь с нами</div>
          <a className={b("email-link")}>info@yarcheplus.ru</a>
        </div>
        <div className={b("telephone")}>
          <div className={b("telephone-text")}>Служба поддержки:</div>
          <a className={b("telephone-link")}>8 800 250 44 44</a>
          <div className={b("telephone-details")}>
            7 дней в неделю с 05:00 до 22:00 по московскому времени, для звонков
            по РФ, звонок бесплатный
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
