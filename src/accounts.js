'use strict';

const accountOne = {
  owner: 'Sameer Kunwor',
  movements: [200, -300, 400, 500, -700, 1300, -1100, 1600],
  interestRate: 1.5,
  pin: 1111,
};

const accountTwo = {
  movements: [500, -600, 700, -300, 1300, -1100, 1600],
  owner: 'Kim',
  interestRate: 1.1,
  pin: 2222,
};

const accountThree = {
  movements: [1000, -600, 700, -300, 1300, -1100, 1600],
  owner: 'Sarah',
  interestRate: 1.6,
  pin: 3333,
};

const accounts = [accountOne, accountTwo, accountThree];
