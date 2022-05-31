export class Product {
  public name: string;
  // public imgBase64: string;
  public price: number;

  constructor(
    name: string,
    // imgBase64: string,
    price: number
  ) {
    this.name = name;
    // this.imgBase64 = imgBase64;
    this.price = price;
  }
}
