import { Link } from "react-router-dom";
import { IAction, IActionData } from "../../../shared/types/redux";

export enum BCActionDataTypes {
  TEST_TYPE = "testFeatures/TEST_TYPE",
}

export enum Category1 {
  IceCream = "IceCream",
  Milk = "Milk",
  VegetablesAndFruits = "VegetablesAndFruits",
  MeatAndBird = "MeatAndBird",
}

export enum Category2 {
  Vegetables = "Vegetables",
  Fruits = "Fruits",
  Meat = "Meat",
  Bird = "Bird",
}

interface IBCPayload {
  [BCActionDataTypes.TEST_TYPE]?: {
    testActionArg: boolean;
  };
}

export interface IBCState {
  products: Array<IProductDescription>;
  categories1: Category1[];
  categories2: Category2[];
}
export interface IProductDescription {
  productName: string;
  price: string;
  img: any;
  rating: number;
  categories1: Category1[];
  categories2: Category2[];
}

export interface IBCAction<TArgs>
  extends IAction<BCActionDataTypes, IBCPayload, TArgs> {}
export interface IBCActionData
  extends IActionData<BCActionDataTypes, IBCPayload> {}
