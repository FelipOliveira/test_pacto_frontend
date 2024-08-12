export enum Roles {
    ADMIN = 'ADMIN',
    USER = 'USER'
}
  
 export interface Role {
    id: number;
    name: string;
    uid: string; // ADMINISTRATOR, USER
    extends?: number | null; // id of the role to be extended
}
  
export interface User {
    id?: number;
    name?: string;
    role?: Role;
}