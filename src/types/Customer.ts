export interface CustomerData {
  ID: string;
  name: string;
  occupation: string;
  email: string;
  phone_number: string;
  address: string;
  amount: number;
  interest: number;
  start_date: string;
  end_date: string;
  status: 'active' | 'closed' | 'defaulted';
  balance: number;
  payment_history: string[];
}

export class Customer implements CustomerData {
  ID: string;
  name: string;
  occupation: string;
  email: string;
  phone_number: string;
  address: string;
  amount: number;
  interest: number;
  start_date: string;
  end_date: string;
  status: 'active' | 'closed' | 'defaulted';
  balance: number;
  payment_history: string[];

  constructor(
    ID: string,
    name: string,
    occupation: string,
    email: string,
    phone_number: string,
    address: string,
    amount: number | string,
    interest: number | string,
    start_date: string,
    end_date: string,
    status: 'active' | 'closed' | 'defaulted',
    balance: number | string,
    payment_history: string | string[]
  ) {
    this.ID = ID;
    this.name = name;
    this.occupation = occupation;
    this.email = email;
    this.phone_number = phone_number;
    this.address = address;
    this.amount = typeof amount === 'string' ? parseFloat(amount) : amount;
    this.interest = typeof interest === 'string' ? parseFloat(interest) : interest;
    this.start_date = start_date;
    this.end_date = end_date;
    this.status = status;
    this.balance = typeof balance === 'string' ? parseFloat(balance) : balance;
    this.payment_history = typeof payment_history === 'string' 
      ? payment_history.split(',').map(p => p.trim())
      : payment_history;
  }

  getTotalOwed(): number {
    return this.amount + (this.amount * this.interest / 100);
  }
}
