import { TextareaHTMLAttributes, useState } from "react";
import block from "bem-cn";
import { IFormWindowProps } from "./types";

import SVG from "components/SVG";
import Input from "components/Input";
import CheckBox from "components/CheckBox/CheckBox";
import Button from "components/Button";

import formSvg from "./img/formImg.svg";
import closeButtonSvg from "./img/closeButton.svg";

import "./FormWindow.scss";

const b = block("form-window");

function FormWindow({ onClose }: IFormWindowProps) {
  const [isPrivateHome, setIsPrivateHome] = useState<boolean>(false);
  const [commentSymbols, setCommentSymbols] = useState<number>(0);

  return (
    <div className={b()}>
      <SVG
        className={b("close-button")}
        svgProps={{ svg: closeButtonSvg }}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      />
      <SVG className={b("img")} svgProps={{ svg: formSvg }} />
      <div className={b("img-text")}>
        Уточните адрес доставки, и мы покажем актуальный ассортимент
      </div>
      <form className={b("form")}>
        <div className={b("address")}>Адрес</div>
        <Input type="text" />

        <label className={b("checkbox")}>
          <CheckBox
            onChecked={() => {
              setIsPrivateHome((p) => {
                return !p;
              });
            }}
            checked={isPrivateHome}
          />
          <div className={b("checkbox-text", { active: isPrivateHome })}>
            Частный дом
          </div>
        </label>

        <div className={b("add-info-1")}>Подъезд</div>
        <div className={b("add-info-2")}>Этаж</div>
        <div className={b("add-info-3", { active: isPrivateHome })}>
          Кв./Оф.
        </div>
        <Input type="text" />
        <Input type="text" />
        <div className={b("add-info-3-input", { active: isPrivateHome })}>
          <Input type="text" />
        </div>

        <div className={b("comment")}>
          <div className={b("comment-text")}>Комментарий</div>
          <div className={b("number-letters")}>{commentSymbols} из 95</div>
        </div>
        <textarea
          className={b("comment-textarea")}
          maxLength={95}
          onInput={(e) => {
            setCommentSymbols((e.target as HTMLTextAreaElement).value.length);
          }}
        ></textarea>
        <div className={b("confirm")}>
          <Button
            onClick={() => {
              onClose();
            }}
          >
            Подтвердить
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormWindow;
