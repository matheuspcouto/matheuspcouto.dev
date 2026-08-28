/**
 * Interface que representa um projeto.
 *
 * @author Matheus Pimentel Do Couto
 */
export interface Project {
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly url: string;
  readonly image: string;
}
