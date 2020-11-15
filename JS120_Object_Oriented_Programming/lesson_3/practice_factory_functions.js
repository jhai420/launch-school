// 1. What are two disadvantages of working with factory functions?

// - Factory functions uses a lot of space and repetitive code 
// - There is no way to trace which factory function created an object, 
// making it difficult to know if you're working with the right object with the expected state and behaviors.

// 2. Rewrite the following code to use object-literal syntax to generate the returned object:

function makeObj() {
  return {
    propA: 10,
    probB: 20
  };
}

// 3. In this problem and the remaining problems, we'll build a simple invoice processing program. 
// To get you started, here's the code to process a single invoice:
/*
let invoice = {
  phone: 3000,
  internet: 6500
};

let payment = {
  phone: 1300,
  internet: 5500
};

let invoiceTotal = invoice.phone + invoice.internet;
let paymentTotal = payment.phone + payment.internet;
let remainingDue = invoiceTotal - paymentTotal;

console.log(paymentTotal);         // => 6800
console.log(remainingDue);         // => 2700
*/
/*

To process multiple invoices, we need a factory method that we can use to create invoices. 
The requirements for the factory function are as follows:

1. It returns an invoice object, with phone and internet properties, and a total method.
2. The default value for the phone service is 3000, and the internet service is 5500 (in cents, of course!).
3. The function takes an object argument whose attributes override the default values.
Your function should work with the following code:



function createInvoice(services) {
  return {
    phone: services ? services.phone || 3000 : 3000,
    internet: services ? services.internet || 5500 : 5500,

    total() {
      return this.phone + this.internet;
    }
  }
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices)); // 31000
*/

/*
// 4. Now we can build a factory function to create payments. 
// The function can take an object argument in one of 3 forms:

Payment for one service, e.g., { internet: 1000 } or { phone: 1000 }.
Payment for both services, e.g., { internet: 2000, phone: 1000 }.
Payment with just an amount property, e.g., { amount: 2000 }.

The function should return an object that has the amount paid for each service 
and a total method that returns the payment total. 
If the amount property is not present in the argument, 
it should return the sum of the phone and internet service charges; 
if the amount property is present, return the value of that property.

Your function should work with the following code:

*/

function createPayment(services = {}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0 ,
    amount: services.amount,

    total() {
      return this.amount || this.phone + this.internet;
    }
  }
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000

// 5. Update the createInvoice function so that it can add payment(s) to invoices. 

function createInvoice2(services) {
  return {
    phone: services ? services.phone || 3000 : 3000,
    internet: services ? services.internet || 5500 : 5500,
    payments: [],

    total() {
      return this.phone + this.internet;
    },

    addPayment(payment) {
      this.payments.push(payment.total())
    },

    addPayments(paymentsArray) {
      paymentsArray.forEach(payment => this.payments.push(payment.total()));
    },

    amountDue() {
      let invoiceTotal = this.total();
      let paymentTotal = this.payments.reduce((a,b) => a + b);
      return invoiceTotal - paymentTotal;
    },
  }
}

// Use the following code as a guideline:

invoice = createInvoice2({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0

