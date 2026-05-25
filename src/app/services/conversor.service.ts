import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private http = inject(HttpClient);

  private apiUrl = 'https://api.apilayer.com/currency_data/live';

  obtenerTasas(): Observable<any> {
    const headers = new HttpHeaders({
      'apikey': 'WFo2Uxt0isLGi8PGc1z7QKGAC2hrXn3U' 
    });

    // Le pedimos que nos traiga todas las monedas basándose en el Dólar (USD)
    return this.http.get<any>(`${this.apiUrl}?base=USD`, { headers });
  }

}
