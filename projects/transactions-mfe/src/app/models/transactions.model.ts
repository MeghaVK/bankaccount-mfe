export type TransactionType = | 'credit' |  'debit';
 export type TransactionStatus = | 'completed' | 'pending' | 'failed';
 export interface Transaction {
    id:string;
    date:string;
    description:string;
    type:TransactionType,
    category:string;
    amount:number;
    status:TransactionStatus;

 }
 export interface TransactionsResponse{
    success:boolean,
    transactions:Transaction[]
 }
