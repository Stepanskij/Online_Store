import { useState } from "react";
import block from "bem-cn";

import SVG from "components/SVG";
import Modal from "components/Modal/Modal";
import FormWindow from "../FormWindow";

import addressMarkerSvg from "./img/addressMarker.svg";

import "./FormLink.scss";

const b = block("delivery-address");

function FormLink() {
  const [windowOpen, setWindowOpen] = useState(false);

  return (
    <a
      className={b()}
      title="Уточните адрес доставки"
      onClick={() => {
        setWindowOpen(true);
      }}
    >
      <SVG className={b("img")} svgProps={{ svg: addressMarkerSvg }} />
      <div className={b("text")}>Уточните адрес доставки</div>
      {windowOpen && (
        <Modal
          onClose={() => {
            setWindowOpen(false);
          }}
        >
          <div className={b("form-window")}>
            <FormWindow
              onClose={() => {
                setWindowOpen(false);
              }}
            />
          </div>
        </Modal>
      )}
    </a>
  );
}

export default FormLink;
