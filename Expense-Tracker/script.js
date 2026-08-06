let balanceEl = document.getElementById('balance');
let incomeAmountEl = document.getElementById('income-amount');
let expenseAmountEl = document.getElementById('expense-amount');
let transactionListEl = document.getElementById('transaction-list');
let transactionFormEl = document.getElementById('transaction-form');
let descriptionEl = document.getElementById('description');
let amountEl =document.getElementById('amount');

//tabdile reshteh be array
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

transactionFormEl.addEventListener('submit',addTransaction);

function addTransaction(e) {
    e.preventDefault();

    // get form values
    const description = descriptionEl.value.trim();
    //tabdile reshte be adade ashari
    const amount = parseFloat(amountEl.value);

    transactions.push({
        id:Date.now(),
        description,
        amount
    });

    //array ra be soorate yek reshteh json zakhire mikonad
    localStorage.setItem('transactions',JSON.stringify(transactions));

    updateTransactionList();
    updateSummary();

    //tamame voroodihaye form ra khali mikonad 
    transactionFormEl.reset();
}

function updateTransactionList(){
    transactionListEl.innerHTML ="";

    const sortedTransactions = [...transactions].reverse();

    sortedTransactions.forEach((transaction)=>{
        const transactionEl = createTransactionElement(transaction);
        transactionListEl.appendChild(transactionEl)
    });
}

function createTransactionElement(transaction){
    const li = document.createElement('li');
    li.classList.add('transaction');
    li.classList.add(transaction.amount > 0 ? 'income' : 'expense')

    li.innerHTML = `
    <span>${transaction.description}</span>

    <span>${transaction.amount}
        <button class='delete-btn' onclick = 'removeTransaction(${transaction.id})'>x</button>
    </span>
    `;

    return li;
}

function updateSummary() {
  // 100, -50, 200, -200 => 50
  const balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  // update ui => todo: fix the formatting
  balanceEl.textContent = formatCurrency(balance);
  incomeAmountEl.textContent = formatCurrency(income);
  expenseAmountEl.textContent = formatCurrency(expenses);
}

function formatCurrency(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}

function removeTransaction(id) {
  // filter out the one we wanted to delete
  transactions = transactions.filter((transaction) => transaction.id !== id);

  localStorage.setItem("transactions", JSON.stringify(transactions));

  updateTransactionList();
  updateSummary();
}

// initial render
updateTransactionList();
updateSummary();