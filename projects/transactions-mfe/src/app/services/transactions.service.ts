import {Injectable, inject} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{map, Observable} from 'rxjs';
import {TransactionsResponse} from '../models/transactions.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn:'root'
})

export class TransactionsService{

    private readonly http = inject(HttpClient);
      private readonly apiUrl = `${environment.apiUrl}/transactions`;
//     private readonly apiUrl =
//   'https://bank-api.getvoroa.com/api/transactions';

    getTransactions():Observable<TransactionsResponse>{
    //     const token = localStorage.getItem('token')
        
    //         const headers = new HttpHeaders({
    //   Authorization: `Bearer ${token ?? ''}`
    // });

    return this.http.get<TransactionsResponse>(
      this.apiUrl
    );
        
    }


}