/**
 * Helpers para operações de janela do navegador.
 *
 * @author Matheus Pimentel Do Couto
 */
import { inject, InjectionToken, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Injection token para a API Window.
 * Permite injeção de dependência e facilita testes.
 */
export const WINDOW = new InjectionToken<Window | null>('WindowToken', {
  providedIn: 'root',
  factory: () => {
    const platformId = inject(PLATFORM_ID);
    return isPlatformBrowser(platformId) ? window : null;
  }
});

/**
 * Abre uma URL em uma nova aba do navegador.
 * Função utilitária standalone para uso direto.
 *
 * @param url - URL a ser aberta.
 */
export function openInNewTab(url: string): void {
  window.open(url, '_blank');
}

/**
 * Serviço injetável para operações de janela.
 * Permite melhor testabilidade através de DI.
 *
 * @example
 * ```typescript
 * class MyComponent {
 *   private windowHelper = inject(WindowHelper);
 *
 *   goToUrl(): void {
 *     this.windowHelper.openInNewTab('https://example.com');
 *   }
 * }
 * ```
 */
export class WindowHelper {
  private readonly window = inject(WINDOW);

  /**
   * Abre uma URL em uma nova aba do navegador.
   *
   * @param url - URL a ser aberta.
   */
  openInNewTab(url: string): void {
    this.window?.open(url, '_blank');
  }
}
