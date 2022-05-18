import { Customer } from './customer';
import { Item } from './item';

export enum PaymentMethod {
  money = 'money',
  credit = 'credit card',
  debit = 'debit card',
}

export class Order {
  private _customer: Customer;

  private _items: Item[];

  private _discount: number = 0;

  private _paymentMethod: PaymentMethod;

  constructor(customer: Customer, items: Item[], paymentMethod: PaymentMethod, discount?: number) {
    this._customer = customer;
    this._items = items;
    this._paymentMethod = paymentMethod;

    if (discount && discount < 1) throw new Error('"discount" must be a positive number');
    if (discount) this._discount = discount;
  }

  get customer() {
    return this._customer;
  }

  get items() {
    return this._items;
  }

  get discount() {
    return this._discount;
  }

  get paymentMethod() {
    return this._paymentMethod
  }

  total(): number {
    return this._items.reduce((acc, curr) => acc + curr.price, 0)
  }

  totalWithDiscount() {
    const total = this.total();
    const currentDiscount = (total / 100) * this._discount;

    return total - currentDiscount;
  }
}