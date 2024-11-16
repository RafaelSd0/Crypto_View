import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';

  constructor(private http: HttpClient) {}

  getCryptos(currency: string = 'usd'): Observable<any> {
    return this.http.get(`${this.apiUrl}?vs_currency=${currency}`);
  }
}
