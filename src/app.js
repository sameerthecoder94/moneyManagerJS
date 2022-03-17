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

// event listener
btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  const currentAccount = accounts.find(
    (account) =>
      account.username === inputLoginUsername.value &&
      account.pin === +inputLoginPin.value
  );
  if (currentAccount) {
    containerApp.style.opacity = 1;
    inputLoginUsername.value = inputLoginPin.value = '';
    labelWelcome.textContent = `Welcome ${currentAccount.owner}`;
  }

  displayMovements(currentAccount.movements);
  displaySummary(
    currentAccount.movements,
    currentAccount.interestRate
  );
});
