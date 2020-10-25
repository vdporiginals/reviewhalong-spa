export interface Promotion {
    id: string;
    type: number;
    countDown?: Date;
    discount?: number;
    description?: string;
    content?: string;
    image?: string;
    code: Code;
}

interface Code{
    code: string;
    startDate: Date;
    endDate: Date;
}
