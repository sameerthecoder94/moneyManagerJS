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
