import { Promotion } from './promotion.model';

export interface Food {
    id: string;
    name: string;
    description: string;
    content: string;
    promotion?: Promotion;
    address: string;
    bookingPhone: string;
}
