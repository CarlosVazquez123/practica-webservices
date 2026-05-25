import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // No te olvides de importarlo
import { VozService } from '../../services/voz.service';

@Component({
  selector: 'app-voz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './voz.component.html',
  styleUrl: './voz.component.css'
})
export class VozComponent {
  textoIngresado: string = 'Hola profesor, este es el punto cuatro de mi trabajo práctico.';
  vozSeleccionada: string = 'alloy';
  
  // Lista de voces oficiales de OpenAI
  vocesDisponibles: string[] = ['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer'];
  
  audioUrl: string | null = null;
  cargando: boolean = false;

  private vozService = inject(VozService);

  generarAudio() {
    if (!this.textoIngresado) return; // Si no hay texto, no hace nada

    this.cargando = true;
    this.audioUrl = null; // Limpiamos el reproductor por si había un audio viejo

    this.vozService.convertirTextoAAudio(this.textoIngresado, this.vozSeleccionada)
      .subscribe({
        next: (archivoBlob) => {
          // Transformamos el archivo binario en un link temporal reproducible
          this.audioUrl = URL.createObjectURL(archivoBlob);
          this.cargando = false;
        },
        error: (err) => {
          console.error('Error al conectarse a la IA', err);
          this.cargando = false;
        }
      });
  }
}