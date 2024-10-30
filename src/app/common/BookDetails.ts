import { Books } from "./Books";
import { tours } from "./Tours";

export class BookDetails {
    'bookDetailId':number;
    'quantity':number;
    'price':number;
    'tours':tours;
    'bookId': number;
    'start_date' :Date;
    'end_date' :Date;
        

    constructor(id: number) {
        this.bookDetailId = id;
    }
}
