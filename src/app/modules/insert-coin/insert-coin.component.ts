import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../services/balance/balance.service';

@Component({
  selector: 'app-insert-coin',
  templateUrl: './insert-coin.component.html',
  styleUrls: ['./insert-coin.component.scss'],
  providers: []
})
export class InsertCoinComponent implements OnInit {
  coinBalance = 0;
  constructor(public balanceService: BalanceService) { }

  ngOnInit() {
    this.balanceService.onBalanceUpdated((balance: any) => {
      this.coinBalance = balance;
    });
  }

  addBalance(amount: any) {
    this.balanceService.addBalance(amount);
  }

}
