/**
 * Componente de rodapé da aplicação.
 *
 * @example
 * <app-mpc-footer />
 *
 * @author Matheus Pimentel Do Couto
 */
import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { SOCIAL_URLS } from '../../shared/constants';

@Component({
  selector: 'app-mpc-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './mpc-footer.component.html',
  styleUrl: './mpc-footer.component.scss'
})
export class MpcFooterComponent {

  /** Ano atual para exibição no copyright. */
  protected readonly currentYear = signal(new Date().getFullYear());

  /** Telefone para contato. */
  protected readonly phone = signal('(63) 9 9201-4337');

  /** URLs das redes sociais. */
  protected readonly socialUrls = computed(() => SOCIAL_URLS);
}
