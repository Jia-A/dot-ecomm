import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Rom-Com",
    image : "./images/new-rom-com.jpg",

  },
  {
    _id: uuid(),
    categoryName: "Thriller",
    image : "./images/new-thriller.jpg",

  },
  {
    _id: uuid(),
    categoryName: "Fantasy",
    image : "./images/fantasy_books.jpg",

  },
  {
    _id: uuid(),
    categoryName: "Sad",
    image : "./images/sad_books.jpg",

  },
  {
    _id: uuid(),
    categoryName: "Horror",
    image : "./images/horror_books.jpg",

  },
];
