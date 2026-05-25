import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  private http = inject(HttpClient);

  private baseUrl = "https://car-specs.p.rapidapi.com/v2/cars/makes";

  private getHeaders() {
    return {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'car-specs.p.rapidapi.com',
        'x-rapidapi-key': 'b847c7b17amshd0cbd3028ad35bap17fb95jsn7436a5f66d04'
      })
    }
  };

  obtenerMarcas(): Observable<any> {
    return this.http.get(this.baseUrl, this.getHeaders());
  }

  obtenerModelosPorMarca(marcaId: string): Observable<any> {
    // Acá unimos la base con el ID usando backticks (`)
    return this.http.get<any>(`${this.baseUrl}/${marcaId}/models`, this.getHeaders());
  }

  /*
  obtenerModelosPorMarca(marcaId: string): Observable<any> {
    return this.http.get<any>(`https://car-specs.p.rapidapi.com/v2/cars/makes/${marcaId}/models`, this.getHeaders());
  }
  */
}