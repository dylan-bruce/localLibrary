//--------------------------------------------------------------------------------------------------------//
function findAuthorById(authors, id) {
  const findAuthor = authors.find(author => author.id === id);
  return findAuthor
}
//--------------------------------------------------------------------------------------------------------//
function findBookById(books, id) {
  const findBook = books.find(book => book.id === id);
  return findBook;
}
//--------------------------------------------------------------------------------------------------------//
//Create bookStatus array containing two arrays
//First array contains checked out books
//Second array contains returned books
//Status can be checked by first borrows transaction (first object)
//Filter books (book)
//if book.borrow[1].returned === false      add book to first array
//else add book to second array
function partitionBooksByBorrowedStatus(books) {
  var returned = [];
  var checkedOut = [];
  var bookStatus = [checkedOut, returned];
  const bookCheckedStatus = books.filter(book => {
    if(book.borrows[0].returned === false) checkedOut.push(book);
    else returned.push(book);
  });
  return bookStatus;
}
//--------------------------------------------------------------------------------------------------------//
function getBorrowersForBook(book, accounts) {
  let results = [];
  let bookIds = book.borrows.map(ids => ids.id);
  for(let account in accounts){
    if(bookIds.includes(accounts[account].id)){
      const found =  
      {
        ...accounts[account],
        returned: book.borrows.find(ifReturned => ifReturned.returned).returned
      }
      results.push(found);
    }
  }
  return results.slice(0,10);
}
//--------------------------------------------------------------------------------------------------------//
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
