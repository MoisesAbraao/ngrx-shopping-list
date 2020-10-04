import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, pluck, tap } from 'rxjs/operators';
import { ShoppingItem } from './store/models/shopping-item.model';

const SHOPPING_URL = 'http://localhost:3000/shopping';
const SHOPPING_LIST_DB = '../../assets/shopping-list.json';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  constructor(private http: HttpClient) {}

  // this should get from the shopping-list-DB
  // instead of the Local API
  // if you want to switch for the local API
  // you should change the URL to Use the SHOPPING_URL

  getShoppingItems() {
    return this.http
      .get<ShoppingItem[]>(SHOPPING_LIST_DB)
      .pipe(
        delay(500),
        pluck('shopping')
      );
  }

  addShoppingItem(shoppingItem: ShoppingItem) {
    return this.http.post(SHOPPING_URL, shoppingItem).pipe(delay(500));
  }

  deleteShoppingItem(id: string) {
    return this.http.delete(`${SHOPPING_URL}/${id}`).pipe(delay(500));
  }
}
