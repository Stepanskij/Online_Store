import { IBCState as InitState } from "./types";

export const initState: InitState = {
  catalog: [
    [{ productName: "", price: "" }], //1
    [
      [{ productName: "", price: "" }],
      [{ productName: "", price: "" }],
      [{ productName: "", price: "" }],
      [{ productName: "", price: "" }],
    ], //3
  ],
};
