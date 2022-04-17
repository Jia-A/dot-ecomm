import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Turtle All The Way Down",
    author: "John Green",
    price: 300,
    categoryName: "Sad",
    image : "./images/turtles-all.jpg",
    quantity : 1,
    ratings : 3
  },
  {
    _id: uuid(),
    title: "Kite Runner",
    author: "Khaled Hosseini",
    price: 400,
    categoryName: "Sad",
    image : "./images/kite-run.jpg",
    quantity : 1,
    ratings : 4
  },
  {
    _id: uuid(),
    title: "Into The Water",
    author: "Paula Hawkins",
    price: 450,
    categoryName: "Thriller",
    image : "./images/into-water.jpg",
    quantity : 1,
    ratings : 3
  },
  {
    _id: uuid(),
    title: "Slammed",
    author: "Colleen Hoover",
    price: 300,
    categoryName: "Rom-Com",
    image : "./images/slammed.jpg",
    quantity : 1,
    ratings : 2
  },
  {
    _id: uuid(),
    title: "Kafka On The Shore",
    author: "Haruki Murakami",
    price: 500,
    categoryName: "Thriller",
    image : "./images/kafka.jpg",
    quantity : 1,
    ratings : 4
  },
  {
    _id: uuid(),
    title: "A Man Called Ove",
    author: "Fredrik Backman",
    price: 450,
    categoryName: "Sad",
    image : "./images/ove.jpg",
    quantity : 1,
    ratings : 5
  },
  {
    _id: uuid(),
    title: "Looking for Alaska",
    author: "John Green",
    price: 250,
    categoryName: "Sad",
    image : "./images/alaska.jpg",
    quantity : 1,
    ratings : 4
  },
  {
    _id: uuid(),
    title: "A Slow Burning Fire",
    author: "Paula Hawkins",
    price: 450,
    categoryName: "Thriller",
    image : "./images/slow-fire.jpg",
    quantity : 1,
    ratings : 3
  },
  {
    _id: uuid(),
    title: "1984",
    author: "George Orwell",
    price: 250,
    categoryName: "Thriller",
    image : "./images/1984.jpg",
    quantity : 1,
    ratings : 3
  },
  {
    _id: uuid(),
    title: "Layla",
    author: "Colleen Hoover",
    price: 300,
    categoryName: "Rom-Com",
    image : "./images/layla.jpg",
    quantity : 1,
    ratings : 2
  },
  {
    _id: uuid(),
    title: "Norweigan Wood",
    author: "Haruki Murakami",
    price: 350,
    categoryName: "Sad",
    image : "./images/norwe-wood.jpg",
    quantity : 1,
    ratings : 2
  },
  {
    _id: uuid(),
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    price: 400,
    categoryName: "Sad",
    image : "./images/splendid-suns.jpg",
    quantity : 1,
    ratings : 5
  },
  {
    _id: uuid(),
    title: "IT",
    author: "Stephen King",
    price: 350,
    categoryName: "Horror",
    image : "./images/IT.jpg",
    quantity : 1,
    ratings : 4
  },
  {
    _id: uuid(),
    title: "The Green Mile",
    author: "Stephen King",
    price: 300,
    categoryName: "Horror",
    image : "./images/green-mile.jpg",
    quantity : 1,
    ratings : 3
  },
  {
    _id: uuid(),
    title: "The Outsider",
    author: "Stephen King",
    price: 350,
    categoryName: "Horror",
    image : "./images/outsider.jpg",
    quantity : 1,
    ratings : 3
  },
  {
    _id: uuid(),
    title: "Harry Potter Set",
    author: "J.K. Rowling",
    price: 500,
    categoryName: "Fantasy",
    image : "./images/harry-potter.jpg",
    quantity : 1,
    ratings : 5
  },
  {
    _id: uuid(),
    title: "Game of Thrones Set",
    author: "George R.R. Martin",
    price: 500,
    categoryName: "Fantasy",
    image : "./images/got.jpg",
    quantity : 1,
    ratings : 3
  },
  {
    _id: uuid(),
    title: "Lord of the Rings Set",
    author: "J.R.R. Tolkien",
    price: 500,
    categoryName: "Fantasy",
    image : "./images/lotr.jpg",
    quantity : 1,
    ratings : 3
  },
  
];
