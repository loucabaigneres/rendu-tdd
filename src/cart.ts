export class Cart {
  constructor(private items: { name: string; priceCents: number }[] = []) {}

  total(): number {
    return 0.00;
  }
}