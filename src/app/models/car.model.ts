import { Promotion } from './promotion.model';

export interface Car {
    id: string;
    name: string;
    content: string;
    description: string;
    promotion?: Promotion;
    price: number;
    booking?: BookingCar;
}

export interface BookingCar {
    id: string;
    carId: string;
    startLocation: string;
    endLocation: string;
    dateStart: string;
    hourStart: string;
    comment: string;
    customer: {
        name: string;
        phone: string;
        email: string;
    };
}
