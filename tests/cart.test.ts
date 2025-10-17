import { Cart } from '../src/cart';

test('empty cart total is 0.00', () => {
  const cart = new Cart();
  expect(cart.total()).toBe(0.00);
});

test('adding one product returns its price', () => {
  const cart = new Cart();
  cart.addProduct('Socks', 1000); // 10.00 €
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