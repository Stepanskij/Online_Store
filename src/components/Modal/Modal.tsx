import * as ReactDOM from "react-dom";
import block from "bem-cn";

import { IModalProps } from "./types";

import "./Modal.scss";

const b = block("modal");

function Modal({ onClose, children }: IModalProps) {
  return ReactDOM.createPortal(
    <div
      className={b()}
      onMouseDown={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div
        className={b("children")}
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>,
    document.querySelector("#modal-root") as Element
  );
}

export default Modal;
