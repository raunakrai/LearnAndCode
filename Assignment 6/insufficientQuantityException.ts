class InsufficientQuantityException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InsufficientQuantityException";
    }
}

export default InsufficientQuantityException;
