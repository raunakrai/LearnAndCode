import Product from "./product";
import ProductManager from "./ProductManager";
import SellManager from "./sellProduct";

const productManager = new ProductManager();
const sellProduct = new SellManager();

try {
  const product1 = new Product(1, "Chair", 50, 100);
  productManager.addProduct(product1);

  const product2 = new Product(2, "Table", 100, 50);
  productManager.addProduct(product2);

  console.log(productManager.inventory);

  productManager.updateProduct(new Product(1, "Chair", 60, 150));

  console.log(productManager.inventory);

  sellProduct.manageSell(1, 20);

  console.log(productManager.inventory);

  productManager.deleteProduct(2);

  console.log(productManager.inventory);
} 
catch (error) {
  console.error(error.message);
}
