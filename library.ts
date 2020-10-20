import {Book} from "./book";
export class Library{
    private books : Book [];
    private address : string;
    private manager : string;
    constructor (libros : Book [], direccion : string, manager : string){
        this.books = libros;
        this.address = direccion;
        this.manager = manager;
    }
    getAddress () : string{
        return this.address;
    }
    getManager () : string{
        return this.manager;
    }
    setAddress (newAddress : string){
        this.address = newAddress;
    }
    setManager (newManager : string){
        this.manager = newManager;
    }
    getToString () : string {
        let todos : string = "";
        for (let i = 0; i < this.books.length; i++){
            todos += "Libro " + (i + 1) + ": \n" + this.books[i].getToString() + "\n";
        }
        return todos;
    }
    getNumberOfBooks() : number {
        return this.books.length;
    }
    getFindByAuthor (name : string) :  Book []{
        let titlesString : Book [] = [];
        let name1 : string = name;
        for (let i = 0; i < this.books.length; i++){
            let book : Book = this.books[i];    
            if (book.getAuthor() === name1){
                titlesString.push(book);
            } 
            
        } 
        return titlesString;
    }
}



