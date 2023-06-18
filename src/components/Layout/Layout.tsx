import { Outlet } from "react-router-dom";
import block from "bem-cn";

import Header from "components/Header";
import Footer from "components/Footer";

import "./Layout.scss";

const b = block("layout");

function Layout() {
  return (
    <div className={b()}>
      <Header />
      <div className={b("content")}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
