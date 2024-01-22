
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class BalanceService {
  private balance: number = 0;
  private subject: Subject<number> = new Subject<number>();

  constructor() { }

  private updateSubject(): void {
    this.subject.next(this.balance);
  }

  setBalance(amount: any): void {
    this.balance = amount;
    this.updateSubject();
  }

  getBalance(): number {
    return this.balance;
  }

  addBalance(amount: any): void {
    this.balance += amount;
    this.updateSubject();
  }

  deductBalance(amount: any): void {
    this.balance -= amount;
    this.updateSubject();
  }

  onBalanceUpdated(callback: any): void {
    this.subject.asObservable().subscribe(callback);
  }
}
