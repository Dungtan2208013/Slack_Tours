import { Customer } from "./Customer";
import { BookDetails } from "./BookDetails";
import { tours } from "./Tours";

export class Rate {
    'id': number;
    'rating': number;
    'comment': string;
    'rateDate': Date;
    'user': Customer;
    'tours': tours;
    'BookDetails': BookDetails;
}
