/**
 * Componente da seção de artigos publicados.
 * Exibe lista de publicações acadêmicas e técnicas.
 *
 * @example
 * <app-articles />
 *
 * @author Matheus Pimentel Do Couto
 */
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MpcCardMenuComponent } from 'mpc-lib-angular';
import { Article } from '../../shared/models';
import { openInNewTab } from '../../shared/helpers';

@Component({
  selector: 'app-articles',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MpcCardMenuComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

  /**
   * Lista de artigos publicados.
   */
  protected readonly articles = signal<readonly Article[]>([
    {
      title: 'Ergonomic Assessment of Avodah Scale Management System Interface Quality: a Project-Based Learning Case Study',
      publicationDate: 'Dezembro - 2021',
      journal: 'International Journal of Development Research - IJDR',
      url: 'https://www.journalijdr.com/sites/default/files/issue-pdf/23530_0.pdf',
      issn: 'ISSN: 2230-9926',
    },
  ]);

  /**
   * Abre o link do artigo em uma nova aba.
   *
   * @param url - URL do artigo.
   */
  protected goToArticle(url: string): void {
    openInNewTab(url);
  }
}
