export interface User{
    id:string;
    name:string;
    email:string;
    role:string
}

export interface LoginRequest{
    email:string | null;
    password:string;
}

export interface LoginResponse{
    success:boolean;
    message:string;
    token?:string;
    user:User
}