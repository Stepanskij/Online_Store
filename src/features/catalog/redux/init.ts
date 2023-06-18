import { Category1, Category2, IBCState } from "./types";

import { products } from "./mock";

export const initState: IBCState = {
  products: products,
  categories1: [
    Category1.IceCream,
    Category1.Milk,
    Category1.VegetablesAndFruits,
    Category1.MeatAndBird,
  ],
  categories2: [
    Category2.Vegetables,
    Category2.Fruits,
    Category2.Meat,
    Category2.Bird,
  ],
};
