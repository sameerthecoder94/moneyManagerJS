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

const [{ movements }] = accounts;

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
displayMovements(movements);

// reduce() method to calculate total balance
const displayBalance = (movements) => {
  labelBalance.textContent = `$${movements.reduce(
    (acc, mov) => acc + mov,
    0
  )}`;
};
displayBalance(movements);
