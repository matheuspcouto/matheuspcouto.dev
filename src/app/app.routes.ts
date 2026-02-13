import { Routes } from '@angular/router';
import { RouteSegment } from './shared/enums/routes-enum';

export const routes: Routes = [
  /*  Routes for Home */
  {
    path: RouteSegment.HOME,
    pathMatch: 'full',
    redirectTo: ''
  }
];
