/*
In these problems, we will develop a factory function for objects that represent books.
The following three books should give you an idea of what our first book object should look like:

Attributes
  Title: Mythos
  Author: Stephen Fry

Behavior:
  Get Description

-----------------------------
Attributes
  Title: Me Talk Pretty One Day
  Author: David Sedaris

Behavior:
  Get Description

-----------------------------
Attributes
 Title: Aunts aren't Gentlemen
 Author: PG Wodehouse

 Behavior:
   Get Description

*/

// Create three objects that represent the three books shown above. 
// The method for the "Get Description" behavior should return a string like the following:
// "Me Talk Pretty one day was written by David Sedaris."

function createBook(title, author, read = false) {
  let book = {
    title: title,
    author: author,
    read: read,

    getDescription() {
      let readBook;
      this.read ? readBook = "I have read it." : readBook = "I haven't read it.";
      return `${this.title} was written by ${this.author}. ${readBook}`;
    },

    readBook() {
      this.read = true;
    }
  }

  return book;
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook("Aunts aren't Gentlemen", "PG Wodehouse");

book3.readBook();
console.log(book3.getDescription());

