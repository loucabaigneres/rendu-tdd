export class Cart {
  private items: { name: string; priceCents: number }[] = [];

  constructor(initial: { name: string; priceCents: number }[] = []) {
    this.items = initial;
  }

  addProduct(name: string, priceCents: number) {
    if (priceCents <= 0) throw new Error('price must be positive');
    this.items.push({ name, priceCents });
  }

  total(): number {
    const sumCents = this.items.reduce((s, it) => s + it.priceCents, 0);
    return parseFloat((sumCents / 100).toFixed(2));
  }
}