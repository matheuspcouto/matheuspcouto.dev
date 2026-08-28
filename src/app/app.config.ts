/**
 * Configuração global da aplicação Angular.
 * Centraliza providers de rotas e outras configurações.
 *
 * @author Matheus Pimentel Do Couto
 */
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions()
    ),
  ]
};
