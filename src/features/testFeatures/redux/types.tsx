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
  catalog: Array<Array<ProductDescription> | Array<Array<ProductDescription>>>;
  testProperty: boolean;
}
interface ProductDescription {
  productName: string;
  price: string;
  [key: string]: string;
}

export interface IBCAction<TArgs>
  extends IAction<BCActionDataTypes, IBCPayload, TArgs> {}
export interface IBCActionData
  extends IActionData<BCActionDataTypes, IBCPayload> {}
