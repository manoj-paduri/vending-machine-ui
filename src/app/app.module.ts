import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertCoinComponent } from './modules/insert-coin/insert-coin.component';
import { DispenseItemComponent } from './modules/dispense-item/dispense-item.component';
import { SelectItemComponent } from './modules/select-item/select-item.component';
import { ItemsComponent } from './modules/items/items.component';
import { BalanceService } from './modules/services/balance/balance.service';
import { ItemService } from './modules/services/item/item.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    InsertCoinComponent,
    DispenseItemComponent,
    SelectItemComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [
    BalanceService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
