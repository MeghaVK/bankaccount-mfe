import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Dashboarddata } from '../../models/finance.model';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CurrencyPipe,DecimalPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {

  private readonly dashboardService = inject(DashboardService);
  readonly dashboard = signal<Dashboarddata | null>(null);

  readonly isLoading = signal(false);
  readonly errorMessage = signal('');

  readonly savingsPercentage =

    computed(() => {
      const data = this.dashboard();
      if (!data || data.income === 0) {
        return 0;
      }

      return (
        data.savings / data.income
      ) * 100;
    })

  ngOnInit(): void {
    // alert("dashboard")
    // console.log(this.dashboardService.getDashboardData())
    this.loadDashboard();


  }

  private loadDashboard(): void {
    this.isLoading.set(true);
    this.dashboardService.getDashboardData()
      .subscribe({
        next: (data) => {
          this.isLoading.set(false);
          console.log(data);
          this.dashboard.set(data)
        },
        error: error => {
          console.log(error);
          this.errorMessage.set(  'Unable to load dashboard information.');
          this.isLoading.set(false)
        }
      })
  }

}
