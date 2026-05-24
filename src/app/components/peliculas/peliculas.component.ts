import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  
  constructor(private peliculasService: PeliculasService) {}

  peliculas: any[] = [];

  ngOnInit(): void {
    this.peliculasService.obtenerPeliculas().subscribe((peliculas) => {
      console.log(peliculas);
    });
  }
}