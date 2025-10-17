import { Cart } from '../src/cart';

test('empty cart total is 0.00', () => {
  const cart = new Cart();
  expect(cart.total()).toBe(0.00);
});

test('adding one product returns its price', () => {
  const cart = new Cart();
  cart.addProduct('Socks', 1000);
  expect(cart.total()).toBe(10.00);
});

test('adding a product with price 0 throws', () => {
  const cart = new Cart();
  expect(() => cart.addProduct('Freebie', 0)).toThrow();
});

test('adding a product with negative price throws', () => {
  const cart = new Cart();
  expect(() => cart.addProduct('Error', -100)).toThrow();
});

test('apply 10% discount only when total > 100.00€', () => {
  const cart = new Cart();
  cart.addProduct('Expensive', 6000); // 60.00
  cart.addProduct('More', 5000);      // 50.00 -> total 110.00 > 100 -> discount
  // 110.00 * 0.9 = 99.00
  expect(cart.total()).toBe(99.00);
});

test('no discount at exactly 100.00€', () => {
  const cart = new Cart();
  cart.addProduct('ItemA', 4000); // 40.00
  cart.addProduct('ItemB', 6000); // 60.00 -> total 100.00 exactly -> no discount
  expect(cart.total()).toBe(100.00);
});

test('duplicate products sum correctly', () => {
  const cart = new Cart();
  cart.addProduct('Socks', 1000);
  cart.addProduct('Socks', 1000);
  expect(cart.total()).toBe(20.00);
});