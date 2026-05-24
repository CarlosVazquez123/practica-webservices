import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  imports: [],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  
  constructor(private peliculasService: PeliculasService) {  }

  ngOnInit() {
    this.peliculasService.obtenerPeliculas().subscribe((peliculas) => {
      console.log(peliculas);
    });
  }
}