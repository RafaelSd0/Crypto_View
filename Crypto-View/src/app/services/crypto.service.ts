import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  constructor(private http: HttpClient) {}

  getCryptos(moeda:string): Observable<any> {
    return this.http.get(`https://api.coingecko.com/api/v3/coins/${moeda}`);
  }


}
