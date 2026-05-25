import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AutosService } from '../../services/autos.service';

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {
  listaMarcas: any[] = [];
  listaModelos: any[] = [];
  marcaSeleccionada: string = '';

  private autosService = inject(AutosService);

  ngOnInit() {
    // Apenas entramos, cargamos las marcas
    this.autosService.obtenerMarcas().subscribe({
      next: (datos) => {
        this.listaMarcas = datos;
      },
      error: (err) => console.error('Error al traer marcas:', err)
    });
  }

  // Se ejecuta al hacer clic en el botón "Ver Modelos" de una tarjeta
  abrirModalModelos(marcaId: string, marcaNombre: string) {
    this.marcaSeleccionada = marcaNombre;
    this.listaModelos = []; // Vaciamos para que no se vea el modelo de otra marca

    this.autosService.obtenerModelosPorMarca(marcaId).subscribe({
      next: (datos) => {
        this.listaModelos = datos;
      },
      error: (err) => console.error('Error al traer modelos:', err)
    });
  }

}
