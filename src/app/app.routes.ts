import { Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { AutosComponent } from './components/autos/autos.component';
import { ConversorComponent } from './components/conversor/conversor.component';
import { VozComponent } from './components/voz/voz.component';
import { QrGeneratorComponent } from './components/qr-generator/qr-generator.component';

export const routes: Routes = [
    { path: '', redirectTo: 'peliculas', pathMatch: 'full' },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'autos', component: AutosComponent },
    { path: 'conversor', component: ConversorComponent },
    { path: 'voz', component: VozComponent },
    { path: 'qr-generator', component: QrGeneratorComponent }
];
