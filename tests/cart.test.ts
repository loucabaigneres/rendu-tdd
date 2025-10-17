import { Cart } from '../src/cart';

test('empty cart total is 0.00', () => {
  const cart = new Cart();
  expect(cart.total()).toBe(0.00);
});