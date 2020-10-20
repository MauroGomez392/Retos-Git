export class Book{
   private title : string;
   private nPages : number;
   private issn : string;
   private author : string;
   private editorial : string;
   constructor (titulo : string, numPag : number, issn : string, autor : string, editorial : string){
       this.title = titulo;
       this.nPages = numPag;
       this.issn = issn;
       this.author = autor;
       this.editorial = editorial;
   }
   getTitle () : string {
       return this.title;
   }
   getNumPages () : number {
       return this.nPages;
   }
   getIssn () : string {
       return this.issn;
   }
   getAuthor () : string {
        return this.author;
   }
   getEditorial () : string {
       return this.editorial;
   }
   setTitle (newTitle : string){
       this.title = newTitle;
   } 
   setNumPages (newNum : number){
       this.nPages = newNum;
   }
   setIssn (newIssn : string){
       this.issn = newIssn;
   }
   setAuthor (newAuthor : string){
       this.author = newAuthor;
   }
   setEditorial (newEdi : string){
       this.editorial = newEdi;
   }
   getToString () : string {
       return "Title - " + this.title + "\n" + "Number of pages - " + this.nPages + "\n" + "ISSN - " + this.issn + "\n" + "Author - " + this.author + "\n" + "Editorial - " + this.editorial;
   }
}
