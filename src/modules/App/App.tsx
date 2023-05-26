import block from "bem-cn";

import Header from "components/Header";
import Footer from "components/Footer/Footer";

import "./App.scss";

const b = block("app");

function App() {
  return (
    <div className={b()}>
      <Header />
      <div className={b("content")}></div>
      <Footer />
    </div>
  );
}

export default App;
