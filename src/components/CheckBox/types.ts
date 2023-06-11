import { InputHTMLAttributes } from "react";

interface ICheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  onChecked: () => void;
}

export type { ICheckBoxProps };
