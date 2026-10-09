import {Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import {TransactionsResponse} from '../models/transactions.model';
import { environment } from '../../environments/environment';

export class TransactionsService{

    private readonly http = inject(HttpClient);

    getTransactions():Observable<TransactionsResponse>{
        
            return this.http.get<TransactionsResponse>(`${environment.apiUrl}/transactions`)
        
    }


}