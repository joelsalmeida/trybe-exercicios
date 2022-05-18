import { Customer } from './customer';
import { Item } from './item';
import { Order, PaymentMethod } from './order';
import Student from './student';

// ** STUDENTS
const john = new Student('John', 951, [7, 8, 6.5, 9], [9, 7.8]);

console.log(john);
console.log(john.examGradesMedia());
console.log(john.examGradesTotal());

// ** ITEMS
const book = new Item('book', 19.00);
const pen = new Item('pen', 1.90);
const eraser = new Item('eraser', 1.50)

// ** CUSTOMERS
const lisa = new Customer('Lisa')

// ** ORDERS
const lisaOrders = new Order(lisa, [book, pen, eraser], PaymentMethod.money, 10)

console.log(lisa);
console.log(lisaOrders);

console.log('TOTAL: ', lisaOrders.total());
console.log('TOTAL WITH DISCOUNT: ', lisaOrders.totalWithDiscount());

