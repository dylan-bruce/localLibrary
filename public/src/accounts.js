//--------------------------------------------------------------------------------------------------------//

function findAccountById(accounts, id) {
  const accountId = accounts.find(account => account.id === id);
  return accountId;
}
//--------------------------------------------------------------------------------------------------------//

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => 
    accountA.name.last.toLowerCase() < accountB.name.last.toLowerCase() ? -1 : 1
  );
  return accounts;
}
//--------------------------------------------------------------------------------------------------------//
//Return the number of books checked out by an account. 
//Filter through borrows from all books for matching id.
//Return array's length.

//Filter through books
//if filtered through borrows id matches
//increment 1
//return value

function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  const bookFilter = books.filter(book => {
    const borrowFilter = book.borrows.filter(borrow => {
      if(borrow.id === account.id) count++;
    });
  });
return count;
}
//--------------------------------------------------------------------------------------------------------//
//filter through books (book)
//Filter through authors
//if filtered authors id === filterd book's author id
//Find book.borrows (borrow) where...
//if borrow id matches account id && !returned
//push book with author information

function getBooksPossessedByAccount(account, books, authors) {
  let results = [];
  for(let book in books){ //Filter through each book "index"
    //If there is a match to the filter conditionals will return an array so .length will make
    //the if statement true, passing into the if statement.
    if(books[book].borrows.filter(borrow => borrow.id === account.id && !borrow.returned).length) {
      const found = //Creating new object 
      {
        ...books[book], //Passing in each individual book at the current "index"
        author: authors.find(author => author.id === books[book].authorId) //Adding in author to value
      }
      results.push(found); //Push new object into result array
    }
  }
  return results; //Returns new array with author embedded book objects
}  
//--------------------------------------------------------------------------------------------------------//
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
