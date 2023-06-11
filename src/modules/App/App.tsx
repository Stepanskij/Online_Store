import block from "bem-cn";

import Header from "components/Header";
import Footer from "components/Footer/Footer";

import Modal from "components/Modal/Modal";

import "./App.scss";
import { useState } from "react";

const b = block("app");

function App() {
  /* const [test, setTest] = useState(""); */
  return (
    <div className={b()}>
      <Header />
      <div className={b("content")}></div>
      <Footer />
      <button></button>
    </div>
  );
}

export default App;
