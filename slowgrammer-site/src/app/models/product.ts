export class Product {
    public productId: number;
    public name: string;
    public description: string;
    public quantity: number;
    public price: number;

    constructor(productId: number, name: string, description: string, quantity: number, price: number) {
        this.productId = productId;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }

}
