import { Routes } from '@angular/router';
import { JuegoPiedraPapelTijerasComponent } from './pages/juego-piedra-papel-tijeras/juego-piedra-papel-tijeras.component';

export const routes: Routes = [

    { path: '', component: JuegoPiedraPapelTijerasComponent }, // ruta inicial
  { path: 'juego', component: JuegoPiedraPapelTijerasComponent }, // ruta adicional opcional
  { path: '**', redirectTo: '' }  // evita errores 404














];
