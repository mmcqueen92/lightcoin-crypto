// let balance = 500.00;
class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}

class Withdrawal extends Transaction  {

  get value() {
    return -this.amount;
  }

}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('Bingus');
console.log(`Starting Balance: `, myAccount.balance);

t1 = new Deposit(400, myAccount);
t1.commit();
console.log('Post-Deposit Balance:', myAccount.balance);

t2 = new Withdrawal(50.25,myAccount);
t2.commit();
console.log('Post-Withdrawal Balance:', myAccount.balance);
