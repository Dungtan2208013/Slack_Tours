import { Customer } from "./Customer";
import { tours } from "./Tours";

export class Favorites {
    'favoriteId': number;
    'user': Customer;
    'tours': tours;

    constructor(id: number, user: Customer, tours: tours) {
        this.favoriteId = id;
        this.tours = tours;
        this.user = user;
    }
}
