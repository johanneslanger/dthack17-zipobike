import { Routes } from '@angular/router';
import { BikeStatus } from './bikeStatus/bikeStatus';
import { FindSpot } from './findSpot/findSpot';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '',           component: Login },
  { path: 'login',      component: Login },
  { path: 'bikeStatus', component: BikeStatus },
  { path: 'findSpot'  , component: FindSpot },
  { path: '**',         component: Login },
];
