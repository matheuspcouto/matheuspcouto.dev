/**
 * Componente da seção "Sobre" do portfólio.
 * Exibe informações pessoais e profissionais.
 *
 * @example
 * <app-about />
 *
 * @author Matheus Pimentel Do Couto
 */
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MpcButtonComponent } from 'mpc-lib-angular';
import { RESUME_URLS } from '../../shared/constants';
import { openInNewTab } from '../../shared/helpers';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MpcButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  /** Data de nascimento do usuário. */
  private readonly birthDate = signal(new Date('2000-05-23'));

  /** Data de início da carreira profissional. */
  private readonly careerStartDate = signal(new Date('2021-03-01'));

  /** Idade do usuário calculada a partir da data de nascimento. */
  protected readonly age = computed(() => this.calculateYearsDifference(this.birthDate()));

  /** Anos de experiência profissional calculados a partir da data de início. */
  protected readonly yearsOfExperience = computed(() => this.calculateYearsDifference(this.careerStartDate()));

  /**
   * Calcula a diferença em anos entre uma data e a data atual.
   *
   * @param startDate - Data de início.
   * @returns Diferença em anos completos.
   */
  private calculateYearsDifference(startDate: Date): number {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    const monthDiff = now.getMonth() - startDate.getMonth();
    const dayDiff = now.getDate() - startDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      years--;
    }

    return years;
  }

  /**
   * Abre o currículo em português em uma nova aba.
   */
  protected viewResumePT(): void {
    openInNewTab(RESUME_URLS.PT_BR);
  }
}
