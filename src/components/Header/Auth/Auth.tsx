import block from "bem-cn";

import SVG from "components/SVG";

import authImg from "./img/auth.svg";

import "./Auth.scss";

const b = block("auth");

function Auth() {
  return (
    <a className={b()}>
      <SVG className={b("img")} svgProps={{ svg: authImg }} />
      <text className={b("text")}>Войти</text>
    </a>
  );
}

export default Auth;
