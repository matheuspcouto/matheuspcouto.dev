/**
 * Componente de cabeçalho da página com efeito de digitação animado.
 *
 * @example
 * <app-page-header />
 *
 * @author Matheus Pimentel Do Couto
 */
import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal, computed, viewChild } from '@angular/core';
import { TYPE_SPEED_MS, DELETE_SPEED_MS, TYPING_PAUSE_MS } from '../../shared/constants';

@Component({
  selector: 'app-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {

  private readonly destroyRef = inject(DestroyRef);

  /** Textos a serem digitados na animação. */
  private readonly typedTexts = signal<readonly string[]>(['Hello World !']);

  /** Referência ao elemento onde o texto será digitado. */
  private readonly typedElement = viewChild.required<ElementRef>('typedElement');

  /** Instância do timeout para animação de digitação. */
  private typedInstance: ReturnType<typeof setTimeout> | null = null;

  /** Índice atual do texto sendo digitado. */
  private currentIndex = signal(0);

  /** Texto atualmente exibido. */
  private currentText = signal('');

  /** Indica se o texto está sendo deletado. */
  private isDeleting = signal(false);

  /** Texto completo atual baseado no índice. */
  private readonly fullText = computed(() => this.typedTexts()[this.currentIndex()]);

  constructor() {
    afterNextRender(() => {
      this.startTypingEffect();
    });

    this.destroyRef.onDestroy(() => {
      if (this.typedInstance) {
        clearTimeout(this.typedInstance);
      }
    });
  }

  /**
   * Inicia o efeito de digitação no elemento referenciado.
   */
  private startTypingEffect(): void {
    const element = this.typedElement().nativeElement;
    const fullText = this.fullText();

    if (this.isDeleting()) {
      this.currentText.set(fullText.substring(0, this.currentText().length - 1));
    } else {
      this.currentText.set(fullText.substring(0, this.currentText().length + 1));
    }

    element.textContent = this.currentText();

    let speed = this.isDeleting() ? DELETE_SPEED_MS : TYPE_SPEED_MS;

    if (!this.isDeleting() && this.currentText() === fullText) {
      speed = TYPING_PAUSE_MS;
      this.isDeleting.set(true);
    } else if (this.isDeleting() && this.currentText() === '') {
      this.isDeleting.set(false);
      this.currentIndex.set((this.currentIndex() + 1) % this.typedTexts().length);
    }

    this.typedInstance = setTimeout(() => this.startTypingEffect(), speed);
  }
}
