import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  obtenerPeliculas() {
    const headers = {
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
      'x-rapidapi-key': 'b847c7b17amshd0cbd3028ad35bap17fb95jsn7436a5f66d04'
    };

    return this.http.get('https://imdb-top-100-movies.p.rapidapi.com/', { headers });
  }
}
