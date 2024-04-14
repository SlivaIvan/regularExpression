import Validator from '../app';

test('testing login validation', () => {
  const testUserIvan = new Validator('ivan_48-sliva');
  expect(testUserIvan.validateUsername()).toBe(true);
});

test('testing login validation', () => {
  const testUserIvan = new Validator('ivan_482-sliva');
  expect(testUserIvan.validateUsername()).toBe(true);
});

test('testing login validation', () => {
  const testUserIvan = new Validator('ivansliva');
  expect(testUserIvan.validateUsername()).toBe(true);
});

test('testing login validation', () => {
  const testUserIvan = new Validator('ivanSliva');
  expect(testUserIvan.validateUsername()).toBe(true);
});

test('testing for error checking', () => {
  const testUserIvan = new Validator('ivan_48-sliva23');
  expect(testUserIvan.validateUsername()).toBe(false);
});

test('testing for error checking', () => {
  const testUserIvan = new Validator('ivan_48-sliva-');
  expect(testUserIvan.validateUsername()).toBe(false);
});

test('testing for error checking', () => {
  const testUserIvan = new Validator('-ivan_48-sliva');
  expect(testUserIvan.validateUsername()).toBe(false);
});

test('testing for error checking', () => {
  const testUserIvan = new Validator('23ivan_48-sliva');
  expect(testUserIvan.validateUsername()).toBe(false);
});
