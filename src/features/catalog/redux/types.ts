import { Link } from "react-router-dom";
import { IAction, IActionData } from "../../../shared/types/redux";

export enum BCActionDataTypes {
  TEST_TYPE = "testFeatures/TEST_TYPE",
}

interface IBCPayload {
  [BCActionDataTypes.TEST_TYPE]?: {
    testActionArg: boolean;
  };
}

export interface IBCState {
  catalog: Array<
    Array<IProductDescription> | Array<Array<IProductDescription>>
  >;
}
export interface IProductDescription {
  productName: string;
  price: string;
  img: any;
  rating: number;
}

export interface IBCAction<TArgs>
  extends IAction<BCActionDataTypes, IBCPayload, TArgs> {}
export interface IBCActionData
  extends IActionData<BCActionDataTypes, IBCPayload> {}
