import block from "bem-cn";

import SVG from "components/SVG";

import deleteButtonSvg from "./img/deleteButton.svg";

import { IInputSearchProps } from "./types";

import "./SearchInput.scss";

const b = block("search-input");

const SearchInput = ({
  color = "default",
  fontSize = 16,
  ...restProps
}: IInputSearchProps) => {
  return (
    <form className={b()}>
      <div className={b("input-container")}>
        <input
          {...restProps}
          className={b("input")}
          type="search"
          placeholder="Найти товар"
        />
        <span
          className={b("delete-button-container")}
          style={{ opacity: restProps.value ? 1 : 0 }}
        >
          <SVG
            className={b("delete-button")}
            svgProps={{ svg: deleteButtonSvg }}
          />
        </span>
      </div>

      <button className={b("button")} type="submit">
        <span className={b("button-text")}>Найти</span>
      </button>
    </form>
  );
};

export default SearchInput;
