import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChecked?: () => void;
}

export type { IInputProps };
