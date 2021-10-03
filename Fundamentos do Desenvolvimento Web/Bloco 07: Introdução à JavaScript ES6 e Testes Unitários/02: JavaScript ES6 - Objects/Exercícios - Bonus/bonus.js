// Write a JavaScript program to list the properties of a JavaScript object.
// Sample Output: name,sclass,rollno

let student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};

const objectProperty = (object) => Object.values(object).join(', ');
console.log(objectProperty(student));

// Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property.

const delProperty = (object, property) => delete object[property];
delProperty(student, 'rollno');
console.log(student);

// // Write a JavaScript program to get the length of a JavaScript object.

const objectLength = (object) => Object.keys(object).length;
console.log(objectLength(student));

// Write a JavaScript program to display the reading status
// (i.e. display book name, author name and reading status) of the following books.

var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
];

const readingStatus = (books) =>
  books.forEach((book) => {
    if (book.readingStatus === true) {
      console.log(`You still need to read ${book.title} by ${book.author}.`);
    } else {
      console.log(`Already read ${book.title} by ${book.author}.`);
    }
  });
readingStatus(library);
