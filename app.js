const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector(
  '.summary__value--interest'
);
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector(
  '.login__input--user'
);
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector(
  '.form__input--amount'
);
const inputLoanAmount = document.querySelector(
  '.form__input--loan-amount'
);
const inputCloseUsername = document.querySelector(
  '.form__input--user'
);
const inputClosePin = document.querySelector('.form__input--pin');

// Dynamic Movements UI
const accountOne = {
  owner: 'Sameer Kunwor',
  movements: [200, -300, 400, 500, -700, 1300, -1100, 1600],
  interestRate: 1.5,
  pin: 1111,
};

const accountTwo = {
  movements: [1000, -600, 700, -300, 1300, -1100, 1600],
  owner: 'Kim',
  interestRate: 1.1,
  pin: 2222,
};

const accounts = [accountOne, accountTwo];

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

// function to generate movements
const displayMovements = (movements) => {
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
          <div class="movements__row">
            <div class="movements__type movements__type--${type}">
              ${i + 1} ${type}
            </div>
            <div class="movements__value">${mov}</div>
          </div>
          `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// function with filter() and reduce() method to calculate total deposits, withdrawals, interest
const displaySummary = (movements, rate) => {
  const depositsSum = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `$${depositsSum}`;

  const withdrawalsSum = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `$${withdrawalsSum}`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => +(deposit * (rate / 100)).toFixed(2))
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `$${interest}`;

  // const totalBalance = movements.reduce((acc, mov) => acc + mov, 0);
  // labelBalance.textContent = `$${totalBalance}`;
  let totalBalance = (
    depositsSum +
    interest +
    withdrawalsSum
  ).toFixed(2);
  labelBalance.textContent = `$${totalBalance}`;
};

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
