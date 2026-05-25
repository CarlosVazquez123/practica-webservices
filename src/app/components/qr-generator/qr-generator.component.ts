import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QrService } from '../../services/qr-generator.service';

@Component({
  selector: 'app-qr-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './qr-generator.component.html'
})
export class QrGeneratorComponent {
  texto: string = '';
  qrBase64: string = '';
  
  private qrService = inject(QrService);

  generar() {
    if (this.texto.trim()) {
      // Obtenemos la cadena base64 desde el servicio
      // NOTA: Como la API de goqr.me retorna texto plano en base64, 
      // para este ejemplo simple, la URL que te da el servicio sirve directo.
      this.qrBase64 = this.qrService.generarUrlQR(this.texto);
    }
  }
}