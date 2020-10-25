export interface RoomBooking {
    startDate: Date;
    endDate: Date;
    customerNumber: number;
    otherPrice: number;
    code?: string;
}