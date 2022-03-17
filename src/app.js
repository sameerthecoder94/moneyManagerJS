'use strict';

// function to generate username
const createUsername = (accounts) => {
  accounts.forEach((account) => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
  });
};
createUsername(accounts);

let currentAccount;

const updateUI = () => {
  displayMovements(currentAccount.movements);
  displaySummary(
    currentAccount.movements,
    currentAccount.interestRate
  );
};

// event listener for login
btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  currentAccount = accounts.find(
    (account) =>
      account.username === inputLoginUsername.value &&
      account.pin === +inputLoginPin.value
  );
  if (currentAccount) {
    containerApp.style.opacity = 1;
    inputLoginUsername.value = inputLoginPin.value = '';
    labelWelcome.textContent = `Welcome ${currentAccount.owner}`;
    updateUI();
  }
});

// event listener for transfer amount
btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  const receiverAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  const amount = +inputTransferAmount.value;

  if (
    amount > 0 &&
    currentAccount.totalBalance >= amount &&
    receiverAccount &&
    receiverAccount.username !== currentAccount.username
  ) {
    receiverAccount.movements.push(amount);
    currentAccount.movements.push(-amount);
    updateUI();
  }

  // console.log(currentAccount);
  // console.log(receiverAccount);
});
