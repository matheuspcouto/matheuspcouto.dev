/**
 * Componente de navegação responsiva.
 * Suporta navegação por âncoras em página única (SPA).
 *
 * @author Matheus Pimentel Do Couto
 */
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  input,
  PLATFORM_ID,
  signal
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  OFFCANVAS_ANIMATION_DELAY_MS,
  SMOOTH_SCROLL_DURATION_MS,
  NAVBAR_HEIGHT_PX,
  SCROLL_TOP_THRESHOLD_PX,
  DESKTOP_BREAKPOINT_PX
} from '../../shared/constants';

/**
 * Interface de configuração para itens de navegação.
 */
export interface NavItem {
  /** Identificador único do item. */
  id: string;
  /** Texto exibido no link. */
  label: string;
  /** Rota ou âncora de destino (ex: #about ou /about). */
  rota: string;
  /** Classe do ícone Bootstrap Icons. */
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private readonly platformId = inject(PLATFORM_ID);

  /** URL do logo exibido na navbar. */
  readonly logo = input.required<string>();

  /** Lista de itens de navegação. */
  readonly items = input.required<NavItem[]>();

  /** Controla a visibilidade do menu mobile (sincronizado com Bootstrap). */
  protected readonly isMenuOpen = signal(false);

  /** Item ativo atual baseado na posição de scroll. */
  protected readonly activeItemId = signal('home');

  constructor() {
    // Configura listeners do Bootstrap Offcanvas após o DOM estar pronto
    afterNextRender(() => {
      this.setupOffcanvasListeners();
    });
  }

  /**
   * Configura listeners para sincronizar estado com Bootstrap Offcanvas.
   */
  private setupOffcanvasListeners(): void {
    const offcanvasElement = document.getElementById('menuLateral');
    if (offcanvasElement) {
      offcanvasElement.addEventListener('shown.bs.offcanvas', () => {
        this.isMenuOpen.set(true);
      });
      offcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
        this.isMenuOpen.set(false);
      });
    }
  }

  /**
   * Monitora o scroll da página para atualizar a seção ativa.
   */
  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.updateActiveSection();
  }

  /**
   * Fecha o menu mobile ao redimensionar para desktop.
   */
  @HostListener('window:resize')
  onWindowResize(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (window.innerWidth > DESKTOP_BREAKPOINT_PX && this.isMenuOpen()) {
      this.isMenuOpen.set(false);
    }
  }

  /**
   * Alterna a visibilidade do menu mobile.
   */
  protected toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
  }

  /**
   * Fecha o menu mobile.
   */
  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  /**
   * Navega para o início (home).
   */
  protected navegarParaHome(): void {
    this.navegarParaSecao('home');
  }

  /**
   * Navega para uma aba específica (desktop).
   *
   * @param item - Item de navegação clicado.
   */
  protected navegarParaAba(item: NavItem): void {
    const secaoId = this.extrairIdDaRota(item.rota);
    this.navegarParaSecao(secaoId);
  }

  /**
   * Navega para uma aba específica (mobile).
   * O Bootstrap fecha o menu automaticamente via data-bs-dismiss.
   *
   * @param item - Item de navegação clicado.
   */
  protected navegarParaAbaMobile(item: NavItem): void {
    const secaoId = this.extrairIdDaRota(item.rota);

    // Aguarda o menu fechar (Bootstrap animation) antes de fazer scroll
    setTimeout(() => {
      this.navegarParaSecao(secaoId);
    }, OFFCANVAS_ANIMATION_DELAY_MS);
  }

  /**
   * Verifica se um item está ativo.
   *
   * @param item - Item a verificar.
   * @returns true se o item está ativo.
   */
  protected isAbaAtiva(item: NavItem): boolean {
    return this.activeItemId() === item.id;
  }

  /**
   * Extrai o ID da seção removendo prefixos # ou /.
   *
   * @param rota - Rota original (ex: #about ou /about).
   * @returns ID da seção sem prefixo.
   */
  private extrairIdDaRota(rota: string): string {
    if (rota.startsWith('#') || rota.startsWith('/')) {
      return rota.substring(1);
    }
    return rota;
  }

  /**
   * Navega para uma seção específica da página.
   *
   * @param secaoId - ID da seção para navegar.
   */
  private navegarParaSecao(secaoId: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Se não há ID válido ou é home, rola para o topo
    if (!secaoId || secaoId === '' || secaoId === 'home') {
      this.rolarParaTopo();
      this.activeItemId.set('home');
      return;
    }

    // Procura pelo elemento na página
    const elemento = document.getElementById(secaoId);

    if (elemento) {
      // Atualiza o item ativo
      this.activeItemId.set(secaoId);

      // Atualiza a URL com o fragmento (sem causar navegação)
      window.history.pushState(null, '', `#${secaoId}`);

      // Usa requestAnimationFrame para garantir que o DOM está pronto
      requestAnimationFrame(() => {
        const elementPosition = elemento.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - NAVBAR_HEIGHT_PX;

        // Usa scroll suave customizado para garantir funcionamento
        this.smoothScrollTo(offsetPosition);
      });
    }
  }

  /**
   * Rola a página para o topo.
   */
  private rolarParaTopo(): void {
    // Atualiza a URL primeiro
    window.history.pushState(null, '', window.location.pathname);

    // Usa scroll suave customizado
    this.smoothScrollTo(0);
  }

  /**
   * Implementa scroll suave customizado com fallback.
   * Garante funcionamento em todos os navegadores.
   *
   * @param targetPosition - Posição Y de destino.
   */
  private smoothScrollTo(targetPosition: number): void {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = SMOOTH_SCROLL_DURATION_MS;
    let startTime: number | null = null;

    /**
     * Função de easing para suavizar o movimento.
     *
     * @param t - Tempo normalizado (0-1).
     * @returns Valor suavizado.
     */
    const easeInOutQuad = (t: number): number => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    /**
     * Executa a animação de scroll.
     *
     * @param currentTime - Tempo atual da animação.
     */
    const animation = (currentTime: number): void => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutQuad(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }

  /**
   * Atualiza a seção ativa baseada na posição de scroll.
   */
  private updateActiveSection(): void {
    const items = this.items();

    // Percorre as seções de baixo para cima para encontrar a visível
    for (let i = items.length - 1; i >= 0; i--) {
      const secaoId = this.extrairIdDaRota(items[i].rota);
      const section = document.getElementById(secaoId);

      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= SCROLL_TOP_THRESHOLD_PX) {
          this.activeItemId.set(items[i].id);
          return;
        }
      }
    }

    // Default para home se no topo
    if (window.scrollY < SCROLL_TOP_THRESHOLD_PX) {
      this.activeItemId.set('home');
    }
  }
}
