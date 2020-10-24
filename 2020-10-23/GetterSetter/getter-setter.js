function Book(author, title){
    this.author = author;
    this.title = title;
    this.gs = function(field, value){
                    if (value) this[field] = value;
                    else return this[field];
                };
}

const book = new Book("Herzen", "What to do?");
console.log(book);

const author = book.gs("author");
console.log(author);

book.gs("author","Lenin");
console.log(book);
