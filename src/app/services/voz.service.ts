import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VozService {

  private http = inject(HttpClient);
  
  private apiUrl = 'https://open-ai-text-to-speech1.p.rapidapi.com/';

  // La función recibe el texto y la voz elegida
  convertirTextoAAudio(texto: string, voz: string): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-rapidapi-host': 'open-ai-text-to-speech1.p.rapidapi.com',
      'x-rapidapi-key': 'b847c7b17amshd0cbd3028ad35bap17fb95jsn7436a5f66d04' 
    });

    // El paquete de datos que le enviamos a la IA (El Body)
    const body = {
      model: 'tts-1',
      input: texto,
      instructions: 'Speak clearly and naturally.',
      voice: voz // Puede ser alloy, echo, fable, etc.
    };

    // ATENCIÓN ACÁ: Le avisamos que la respuesta es un archivo (blob)
    return this.http.post(this.apiUrl, body, { headers, responseType: 'blob' });
  }
}