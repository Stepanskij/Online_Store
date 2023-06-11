import block from "bem-cn";

import SVG from "components/SVG";

import authSvg from "./img/auth.svg";

import "./Auth.scss";

const b = block("auth");

function Auth() {
  return (
    <a className={b()}>
      <SVG className={b("img")} svgProps={{ svg: authSvg }} />
      <div className={b("text")}>Войти</div>
    </a>
  );
}

export default Auth;
