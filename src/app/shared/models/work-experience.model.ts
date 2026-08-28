/**
 * Interface que representa uma experiência profissional.
 *
 * @author Matheus Pimentel Do Couto
 */
export interface WorkExperience {
  readonly title: string;
  readonly period: string;
  readonly company: string;
  readonly activities: readonly string[];
}
