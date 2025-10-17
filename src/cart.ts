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
    let finalCents = sumCents;
    if (sumCents > 10000) {
      // apply 10% discount and round to nearest cent
      finalCents = Math.round(sumCents * 0.9);
    }
    return parseFloat((finalCents / 100).toFixed(2));
  }
}