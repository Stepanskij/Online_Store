import { Routes, Route } from "react-router-dom";
import block from "bem-cn";

import Layout from "components/Layout";

import "./App.scss";

const b = block("app");

function App() {
  return (
    <div className={b()}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Default</div>} />
          <Route path="delivery" element={<div>delivery</div>} />
          <Route path="how-pay" element={<div>how-pay</div>} />
          <Route path="how-buy" element={<div>how-buy</div>} />
          <Route path="telephone" element={<div>telephone</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
