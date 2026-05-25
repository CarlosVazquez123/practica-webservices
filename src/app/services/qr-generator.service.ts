import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrService {
  // La base de la API de QR
  private baseUrl = 'https://api.qrserver.com/v1/create-qr-code/';

  // Función que arma la URL completa para el navegador
  generarUrlQR(texto: string): string {
    // format=base64
    return `${this.baseUrl}?size=250x250&data=${encodeURIComponent(texto)}&format=base64`;
  }
}