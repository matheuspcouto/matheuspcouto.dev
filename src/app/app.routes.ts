/**
 * Configuração de rotas da aplicação.
 *
 * @author Matheus Pimentel Do Couto
 */
import { Routes } from '@angular/router';

export const routes: Routes = [
  /* Rota wildcard - redireciona para home */
  {
    path: '**',
    redirectTo: ''
  }
];
