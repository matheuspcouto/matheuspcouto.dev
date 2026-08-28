/**
 * Interface que representa uma categoria de habilidade.
 *
 * @author Matheus Pimentel Do Couto
 */
export interface Skill {
  readonly title: string;
  readonly icon: string;
  readonly items: readonly string[];
}
