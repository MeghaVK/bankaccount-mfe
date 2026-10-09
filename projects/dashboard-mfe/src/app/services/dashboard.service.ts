import{Injectable,inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable, map} from 'rxjs';
import{Dashboarddata} from '../models/finance.model';
// import { devenvironment } from '../../environments/environment.development';
import { environment } from '../../environments/environment';
interface ApiResponse<T>{
    success:boolean,
    data:T
}
@Injectable({
    providedIn:'root'
})
export class DashboardService{
    private readonly http = inject(HttpClient);
     private readonly apiUrl = `${environment.apiUrl}/dashboard`;
    // private readonly apiUrl = 'https://bankaccount-mfe.onrender.com/api/dashboard';
    //  private readonly apiUrl = environment.production?environment.apiUrl : !environment.production;

    getDashboardData(): Observable<Dashboarddata>{
console.log(environment.production)

        return this.http.get<Dashboarddata>(this.apiUrl)
    }
}