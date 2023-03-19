
function findById(array, id) {
   let found = array.find((item) => item.id === id);
   return found;
}

function findAuthorById(authors, id){
   return findById(authors, id);
}



function findById(array, id) {
   let found = array.find((item) => item.id === id);
   return found;
}

function findBookById(books, id){
   return findById(books, id);
}


function partitionBooksByBorrowedStatus(books) {
 let booksReturned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
 );

 let booksBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );

 let finalArray = [[...booksBorrowed], [...booksReturned]];
 return finalArray;
}


  function getBorrowersForBook(book, accounts) {
 return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
