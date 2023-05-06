import { IBCState as InitState } from "./types";

export const initState: InitState = {
  catalog: [
    [{ productName: "", price: "" }], //1
    [{ productName: "", price: "" }], //2
    [
      [{ productName: "", price: "" }],
      [{ productName: "", price: "" }],
      [{ productName: "", price: "" }],
      [{ productName: "", price: "" }],
    ], //3
    [[{ productName: "", price: "" }], [{ productName: "", price: "" }]], //4
    [{ productName: "", price: "" }], //5
  ],
  testProperty: false,
};

/* 
catalog:{
  1[Новинки],
  1[Хиты],
  3[Овощи и фрукты]:{
    1[Овощи],
    2[Фрукты],
    3[Зелень],
    4[Грибы и ягоды],
  },
  4[Молоко, яйца и сыр]:{
    1[Молоко, Сливки],
    2[Кефир, ряженка, снежок],
  },
  5[Мелочи у кассы]
}
*/
