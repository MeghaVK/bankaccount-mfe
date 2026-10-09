import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal
} from '@angular/core';

import {
  CurrencyPipe,
  DatePipe
} from '@angular/common';

// import {
//   CdkVirtualForOf,
//   CdkVirtualScrollViewport
// } from '@angular/cdk/scrolling';

import {
  takeUntilDestroyed
} from '@angular/core/rxjs-interop';

import {
  EMPTY,
  timer
} from 'rxjs';

import {
  catchError,
  finalize,
  switchMap
} from 'rxjs/operators';

import {
  Transaction
} from '../../models/transactions.model';

import {
  TransactionsService
} from '../../services/transactions.service';

@Component({
  selector: 'app-transactions',
  imports: [],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss',
})
export class Transactions implements OnInit  {

  private readonly transactionsService = inject(TransactionsService);
  private readonly destroyRef = inject(DestroyRef);

  readonly transactions =
    signal<Transaction[]>([]);

  readonly isLoading =
    signal(false);

  readonly errorMessage =
    signal('');


    ngOnInit():void{
      this.startPolling();
    }
private startPolling(): void {
  timer(0, 10000)
    .pipe(
      switchMap(() => {
        this.isLoading.set(true);

        return this.transactionsService.getTransactions().pipe(
          catchError(() => {
            this.errorMessage.set('Unable to load transactions.');
            return EMPTY;
          }),
          finalize(() => this.isLoading.set(false))
        );
      }),
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe({
      next: (response) => {
        this.transactions.set(response.transactions);
        console.log(this.transactions())
        this.errorMessage.set('');
        // this.lastUpdated.set(new Date());
      },
      error: (err) => {
        console.error('Unexpected polling error:', err);
      }
    });
}
  // ngOnInit(): void {
  //   this.transactionsService.getTransactions().pipe(
  //     catchError(() => {

  //       console.log('Transaction error');

  //       this.errorMessage.set(
  //         'Unable to load transactions.'
  //       );
  //       return EMPTY;
  //     }),
  //     finalize(() => this.isLoading.set(false))
  //   )


  // }
}
