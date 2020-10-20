import {Book} from "./book";
import {Library} from "./library";

let libro1 : Book = new Book ("Introducción a Javascript", 223, "2344433 - BC23333", "Joseph Smith", "Now Editions");
let libro2 : Book = new Book ("Palomo", 2433, "23338233 - LA23333", "Jaime Ross", "Baatimovil");
let libro3 : Book = new Book ("Patria", 343, "2345533 - BC44333", "Jaime Ross", "La Farola");
let libro4 : Book = new Book ("Yo", 777, "2345533 - CR77333", "Jaime Ross", "La Champions");
let miBiblio : Library = new Library ( [libro1, libro2, libro3, libro4], "Aragón 174, Barcelona", "Mauro Gómez");
console.log (miBiblio.getFindByAuthor("Jaime Ross"));

console.log (miBiblio.getAddress());
console.log (miBiblio.getManager());
console.log (miBiblio.getToString());
console.log (miBiblio.getNumberOfBooks());
console.log (miBiblio.getFindByAuthor("Jaime Ross"));