import NegativePriceException from "./negativePriceException";

class Product {
  id: number;
  name: string;
  price: number;
  quantity: number;

  constructor(id: number, name: string, price: number, quantity: number) {
    if (price < 0) {
      throw new NegativePriceException("Price cannot be negative.");
    }

    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

export default Product;
