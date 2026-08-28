/**
 * Interface que representa um artigo publicado.
 *
 * @author Matheus Pimentel Do Couto
 */
export interface Article {
  readonly title: string;
  readonly publicationDate: string;
  readonly journal: string;
  readonly url: string;
  readonly issn: string;
}
