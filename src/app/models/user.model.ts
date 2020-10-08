export interface UserAddress {
    city: string;
    street: string;
    suite: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    website: string;
    address?: UserAddress;
}
