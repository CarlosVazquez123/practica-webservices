import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ConversorService } from '../../services/conversor.service';

@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conversor.component.html',
  styleUrl: './conversor.component.css'
})
export class ConversorComponent implements OnInit {
  cantidadOrigen: number = 1;
  cantidadDestino: number = 0;
  monedaOrigen: string = 'USD';
  monedaDestino: string = 'ARS';
  
  listaMonedas: string[] = []; // La llenaremos automáticamente
  tasasDeCambio: any = {};     // Guardará el diccionario gigante "quotes"
  cargando: boolean = true;

  private conversorService = inject(ConversorService);

  ngOnInit(): void {
    this.conversorService.obtenerTasas().subscribe({
      next: (datos) => {
        // 1. Guardamos el diccionario de monedas
        this.tasasDeCambio = datos.quotes; 

        // 2. Extraemos los nombres (Cortamos los primeros 3 caracteres "USD" de "USDARS")
        this.listaMonedas = Object.keys(this.tasasDeCambio).map(clave => clave.substring(3));

        // 3. Como la API no manda "USDUSD", lo agregamos nosotros a mano
        if (!this.listaMonedas.includes('USD')) {
          this.listaMonedas.push('USD');
          this.tasasDeCambio['USDUSD'] = 1; 
        }

        // Ordenamos la lista alfabéticamente (opcional pero queda lindo)
        this.listaMonedas.sort(); 

        this.cargando = false;
        this.calcularConversion();
      },
      error: (err) => {
        console.error('Error al conectarse a APILayer', err);
        this.cargando = false;
      }
    });
  }

  // Se ejecuta si cambias el número, la moneda de origen o la de destino
  calcularConversion() {
    // Buscamos cuánto vale la moneda de origen en dólares
    const tasaOrigen = this.tasasDeCambio['USD' + this.monedaOrigen];
    // Buscamos cuánto vale la moneda de destino en dólares
    const tasaDestino = this.tasasDeCambio['USD' + this.monedaDestino];

    if (tasaOrigen && tasaDestino) {
      // Cruzamos los datos: Pasamos todo a dólares primero, y luego a la moneda destino
      this.cantidadDestino = (this.cantidadOrigen / tasaOrigen) * tasaDestino;
    }
  }
}