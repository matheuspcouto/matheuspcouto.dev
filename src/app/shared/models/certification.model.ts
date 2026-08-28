/**
 * Interface que representa uma certificação.
 *
 * @author Matheus Pimentel Do Couto
 */
export interface Certification {
  readonly title: string;
  readonly icon: string;
  readonly completionDate: string;
  readonly url?: string;
}
