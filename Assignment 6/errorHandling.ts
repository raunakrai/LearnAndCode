import DuplicateProductException from "./duplicateProductException";
import NegativePriceException from "./negativePriceException";
import InsufficientQuantityException from "./insufficientQuantityException";

class ErrorHandling {
  static handle(error: Error): void {
    if (error instanceof DuplicateProductException) {
      console.error("Duplicate Product: " + error.message);
    } 
    else if (error instanceof NegativePriceException) {
      console.error("Negative Price: " + error.message);
    }
    else if (error instanceof InsufficientQuantityException) {
      console.error("Insufficient Quantity: " + error.message);
    } 
    else {
      console.error("An error occurred: " + error.message);
    }
  }
}

export default ErrorHandling;
