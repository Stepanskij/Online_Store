import { IProductDescription } from "features/catalog/redux/types";

import ic1Img from "./img/ic1.jpg";
import ic2Img from "./img/ic2.jpg";

const ic1: IProductDescription = {
  productName: "Мороженое «Medino» ванильный пломбир в рожке, 95 г",
  price: "43,99 ₽",
  img: { ic1Img },
  rating: 4.3,
};

const ic2: IProductDescription = {
  productName: "Пломбир «Forsite» сливочный с кусочками печенья, 260 г",
  price: "119,98 ₽",
  img: { ic2Img },
  rating: 5,
};
