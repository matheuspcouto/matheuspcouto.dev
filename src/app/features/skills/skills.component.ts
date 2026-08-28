/**
 * Componente da seção de habilidades técnicas.
 * Exibe grid categorizado de competências.
 *
 * @example
 * <app-skills />
 *
 * @author Matheus Pimentel Do Couto
 */
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Skill } from '../../shared/models';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  /**
   * Lista de categorias de habilidades.
   */
  protected readonly skills = signal<readonly Skill[]>([
    {
      title: 'Back-End',
      icon: 'bi bi-braces',
      items: [
        '> Java',
        '- Spring | JSF | JPA | Hibernate',
        '> NodeJS',
        '- ExpressJS | Fastify | NestJS',
        '> Typescript',
      ],
    },
    {
      title: 'Front-End',
      icon: 'bi bi-code-slash',
      items: [
        '> Angular',
        '> HTML & CSS',
        '> Bootstrap',
        '> JavaScript'
      ],
    },
    {
      title: 'System Design',
      icon: 'bi bi-building',
      items: [
        '> Arquiteturas',
        '- Hexagonal | Clean | MVC | Microsserviços | REST APIs',
        '> Padrões de Código',
        '- DDD | SOLID | Clean Code | POO | UX/UI',
      ],
    },
    {
      title: 'Banco de Dados',
      icon: 'bi bi-database',
      items: [
        '> PostgreSQL',
        '> SQL Server',
        '> MySQL',
        '> MongoDB',
      ],
    },
    {
      title: 'Segurança & Qualidade',
      icon: 'bi bi-shield-lock',
      items: [
        '> Testes',
        '- Vitest | JUnit | Jest',
        '> Qualidade',
        '- SonarQube | Fortify | Gitleaks | Lint',
        '> Segurança',
        '- OAUTH | Crypto | LGPD | CORS | Rate Limit',
      ],
    },
    {
      title: 'Cloud, DevOps & Scrum',
      icon: 'bi bi-cloud',
      items: [
        '> Scrum',
        '- Jira | Confluence | Github Projects',
        '> CI/CD',
        '- Github | Bitbucket | Bamboo | Github Actions',
        '> Cloud',
        '- Azure | AWS'
      ],
    },
    {
      title: 'IA',
      icon: 'bi bi-robot',
      items: [
        '> Claude',
        '> Github Copilot',
        '> Codex',
        '> Amazon Q Developer / Kiro',
      ],
    },
    {
      title: 'Idiomas',
      icon: 'bi bi-globe',
      items: ['Inglês - Intermediário (B2)'],
    },
  ]);
}
