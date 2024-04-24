import Product from "./product";
import DuplicateProductException from "./duplicateProductException";

class ProductManager {
  inventory: Product[];

  constructor() {
    this.inventory = [];
  }

  addProduct(product: Product): void {
    const existingProduct = this.inventory.find((p) => p.id === product.id);
    if (existingProduct) {
      throw new DuplicateProductException(
        `Product with ID ${product.id} already exists.`
      );
    }
    this.inventory.push(product);
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.inventory.findIndex((p) => p.id === updatedProduct.id);
    if (index === -1) {
      throw new Error(`Product with ID ${updatedProduct.id} not found.`);
    }
    this.inventory[index] = updatedProduct;
  }

  deleteProduct(productId: number): void {
    const index = this.inventory.findIndex((p) => p.id === productId);
    if (index === -1) {
      throw new Error(`Product with ID ${productId} not found.`);
    }
    this.inventory.splice(index, 1);
  }
}

export default ProductManager;
