import { calculateSleep, generateDropdownValues } from './';

it('calculates a sleep score', () => {
  expect(calculateSleep(5, 2)).toEqual(250);
  expect(calculateSleep(2, 5)).toEqual(40);
});

it('returns option values', () => {
  const values = generateDropdownValues();
  expect(values[2].label).toEqual('1 hour');
  expect(values[18].value).toEqual(540);
});
