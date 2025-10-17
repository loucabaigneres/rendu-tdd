import { Cart } from '../src/cart';

test('empty cart total is 0.00', () => {
  const cart = new Cart();
  expect(cart.total()).toBe(0.00);
});

test('adding one product returns its price', () => {
  const cart = new Cart();
  cart.addProduct('Socks', 1000); // 1000 centimes = 10.00 €
  expect(cart.total()).toBe(10.00);
});