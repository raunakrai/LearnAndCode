import InsufficientQuantityException from "./insufficientQuantityException";
import Product from "./product";

class SellProduct {
  inventory: Product[];

  constructor() {
    this.inventory = [];
  }
  manageSell(productId: number, quantity: number): void {
    const product = this.inventory.find((p) => p.id === productId);
    if (!product) {
      throw new Error(`Product with ID ${productId} not found.`);
    }
    if (product.quantity < quantity) {
      throw new InsufficientQuantityException(
        `Insufficient quantity of product with ID ${productId}.`
      );
    }
    product.quantity -= quantity;
  }
}

export default SellProduct;
