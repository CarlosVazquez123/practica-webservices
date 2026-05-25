import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit {
  // Arreglo donde guardamos los datos de la API
  listaPeliculas: any[] = [];

  // Inyectamos tu servicio (usando el mismo método de constructor que usaste vos)
  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this.peliculasService.obtenerPeliculas().subscribe({
      next: (datos: any) => {
        this.listaPeliculas = datos;
      },
      error: (err) => {
        console.error('Error al traer las películas', err);
      }
    });
  }
}