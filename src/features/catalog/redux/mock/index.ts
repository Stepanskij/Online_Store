import {
  IProductDescription,
  Category1,
  Category2,
} from "features/catalog/redux/types";

import vegImg from "./img/vegetables.jpg";
import frImg from "./img/fruits.jpg";
import ic1Img from "./img/ic1.jpg";
import ic2Img from "./img/ic2.jpg";
import fruit1Img from "./img/fruit1.jpg";
import fruit2Img from "./img/fruit2.jpg";
import vegetable1Img from "./img/vegetable1.jpg";
import vegetable2Img from "./img/vegetable2.jpg";

export const products: IProductDescription[] = [
  {
    productName: "Мороженое «Medino» ванильный пломбир в рожке, 95 г",
    price: "43,99 ₽",
    img: { ic1Img },
    rating: 4.3,
    categories1: [Category1.IceCream, Category1.Milk],
    categories2: [],
  },
  {
    productName: "Пломбир «Forsite» сливочный с кусочками печенья, 260 г",
    price: "119,98 ₽",
    img: { ic2Img },
    rating: 5,
    categories1: [Category1.IceCream, Category1.Milk],
    categories2: [],
  },
  {
    productName: "Абрикосы Шаллах",
    price: "169,99 ₽",
    img: { fruit1Img },
    rating: 4,
    categories1: [Category1.VegetablesAndFruits],
    categories2: [Category2.Fruits],
  },
  {
    productName: "Мандарины",
    price: "169,99 ₽",
    img: { fruit2Img },
    rating: 5,
    categories1: [Category1.VegetablesAndFruits],
    categories2: [Category2.Fruits],
  },
  {
    productName: "Картофель весовой",
    price: "19,89 ₽",
    img: { vegetable1Img },
    rating: 4,
    categories1: [Category1.VegetablesAndFruits],
    categories2: [Category2.Vegetables],
  },
  {
    productName: "Томаты",
    price: "169,99 ₽",
    img: { vegetable2Img },
    rating: 4.6,
    categories1: [Category1.VegetablesAndFruits],
    categories2: [Category2.Vegetables],
  },
];
