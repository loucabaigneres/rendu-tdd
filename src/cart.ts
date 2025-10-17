export type Product = { name: string; priceCents: number };

export class Cart {
  private items: Product[] = [];

  constructor(initial: Product[] = []) {
    this.items = initial;
  }

  addProduct(name: string, priceCents: number) {
    if (priceCents <= 0) throw new Error('price must be positive');
    this.items.push({ name, priceCents });
  }

  private sumCents(): number {
    return this.items.reduce((s, it) => s + it.priceCents, 0);
  }

  private applyDiscountIfNeeded(sumCents: number): number {
    return sumCents > 10000 ? Math.round(sumCents * 0.9) : sumCents;
  }

  total(): number {
    const sum = this.sumCents();
    const finalCents = this.applyDiscountIfNeeded(sum);
    return parseFloat((finalCents / 100).toFixed(2));
  }
}