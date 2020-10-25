import { Promotion } from './promotion.model';
import { User } from './user.model';

export interface Homestay {
    id: string;
    name: string;
    address: string;
    type: number;
    square: number;
    commonService: string[];
    image: string;
    gallery?: string[];
    services?: HomestayServices[];
    promotion?: Promotion;
    geoLocation?: {
        lat: number;
        lng: number;
    };
    commonPrice: number;
    priceDetail?: PriceDetail[];
    availability?: Availability[];
    otherPrice?: number;
    ratings: number;
    utilities?: Utilities[];
}

export interface UserRating {
    user: User;
    rating: number;
    comment: string;
}

interface Utilities {
    food: string[];
    entertainPlace: string[];
    shopping: string[];
    famousPlace: string[];
}

interface HomestayServices {
    name: string;
    icon: string;
    iconName: string;
}

interface PriceDetail {
    rangeDate: string;
    price: number;
    discount: string;
    maxDate: number;
    minDate: number;
}

interface Availability {
    date: Date;
    price: number;
}
