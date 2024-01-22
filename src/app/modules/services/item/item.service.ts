import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { throwError, Observable, catchError, map } from 'rxjs';

@Injectable()
export class ItemService {
  private apiUrl = 'http://localhost:3000/items';
  private selectedItem: any;

  constructor(private http: HttpClient) { }

  appConfig = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
    })
  };

  private catchError(error: HttpErrorResponse | any) {
    return throwError(() => error || 'Server Error ...');
  }

  get(): Observable<any> {
    return this.http.get(this.apiUrl)
    // .map((res:Response) => res.json());
  }

  onItemsRetrieved(callback: any): void {
    this.get().subscribe(callback);
  }

  getSelectedItem(): any {
    return this.selectedItem;
  }

  setSelectedItem(item: any): void {
    this.selectedItem = item;
  }

  put(body: any): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const updateUrl = `${this.apiUrl}/${this.selectedItem.id}`;
    return this.http.put(updateUrl, JSON.stringify(this.selectedItem))
      // .map((res: Response) => res.json());
  }

  dispenseItem(callback: any): void {
    this.selectedItem.remaining -= 1;
    this.put(this.selectedItem).subscribe(callback);
  }

  hasSufficientBalance(currentBalance: number): boolean {
    if (!this.selectedItem) return false;
    const hasSufficientBalance = (currentBalance >= this.selectedItem.cost);
    return hasSufficientBalance;
  }

  hasRemaining(): boolean {
    return this.selectedItem && this.selectedItem.remaining > 0;
  }
}
