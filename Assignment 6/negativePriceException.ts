class NegativePriceException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NegativePriceException";
    }
}

export default NegativePriceException;
