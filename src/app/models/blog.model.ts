import { User } from './user.model';

export interface Blog {
    id: string;
    name: string;
    content: string;
    createdAt: Date;
    image: string;
    user: User;
}
