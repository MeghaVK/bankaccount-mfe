import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse, User } from './auth.model';
import { tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = 'http://localhost:5000/api/auth';
    private readonly tokenKey = 'bankaccount-token';
    private readonly userKey = 'bankaccount-user';



 readonly isAuthenticated = computed(
    () => !!this.currentUser()
  );

    private readonly currentUser = signal<User | null>(
        this.getStoredUser()
    );


    readonly user$ = this.currentUser.asReadonly();

    login(credentials: LoginRequest) {

        return this.http.post<LoginResponse>(
            `${this.apiUrl}/login`, credentials
        ).pipe(
            tap(response => {
                localStorage.setItem(this.tokenKey, response.token!);


                localStorage.setItem(this.userKey, JSON.stringify(response.user));
                this.currentUser.set(response.user);
            })

        );
    }




    getToken(): string | null {
        return localStorage.getItem(this.tokenKey)
    }

    private getStoredUser(): User | null {
        const storedUser = localStorage.getItem(this.userKey);
        if (!storedUser) {
            return null;


        }

        try {
            return JSON.parse(storedUser) as User;

        }
        catch {
            return null;
        }
    }

}


