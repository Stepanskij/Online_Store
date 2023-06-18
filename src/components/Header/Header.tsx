import { Link } from "react-router-dom";

import block from "bem-cn";

import FormLink from "./FormLink";
import Navigation from "./Navigation";
import CatalogMenu from "./CatalogMenu";

import SearchInput from "./SearchInput";

import Auth from "./Auth";
import Basket from "./Basket/Basket";

import SVG from "components/SVG";

import logoSvg from "./img/logo.svg";

import "./Header.scss";
import { useState } from "react";

const b = block("header");

function Header() {
  const [test, setTest] = useState("");

  return (
    <div className={b()}>
      <div className={b("header-information")}>
        <div className={b("information")}>
          <FormLink />
          <Navigation />
        </div>
      </div>
      <div className={b("header-main")}>
        <div className={b("main")}>
          <Link className={b("logo")} to="/">
            <SVG className={b("logo-svg")} svgProps={{ svg: logoSvg }} />
          </Link>
          <CatalogMenu />
          <div className={b("search-input")}>
            <SearchInput
              value={test}
              onChange={(e) => setTest(e.target.value)}
            />
          </div>
          <Auth />
          <Basket />
        </div>
      </div>
    </div>
  );
}

export default Header;
