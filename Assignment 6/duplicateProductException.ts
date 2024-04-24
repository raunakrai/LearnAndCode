class DuplicateProductException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DuplicateProductException";
  }
}

export default DuplicateProductException;
