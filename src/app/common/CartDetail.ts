import { Cart } from "./Cart";
import { tours } from "./Tours";

export class CartDetail {
    'cartDetailId': number;
    'quantity': number;
    'price': number;
    'tours': tours;
    'cart': Cart;

    constructor(id: number, quantity: number, price: number, tours: tours, cart: Cart) {
        this.cartDetailId = id;
        this.quantity = quantity;
        this.price = price;
        this.tours = tours;
        this.cart = cart;
    }
}
