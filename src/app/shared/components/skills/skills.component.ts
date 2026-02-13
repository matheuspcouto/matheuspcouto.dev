import { Component } from '@angular/core';

/**
 * Interface representing a skill.
 * @interface Skill
 */
interface Skill {
  title: string;
  icon: string;
  items: string[];
}

@Component({
  selector: 'skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  /**
   * List of skills.
   * @type {Skill[]}
   */
  protected skills: Skill[] = [];

  constructor() {
    const BACK_END = [
      '> Java',
      '- Spring | JSF | JPA | Hibernate',
      '> NodeJS',
      '- ExpressJS | Fastify | NestJS',
      '> REST APIs',
      '> Microservices',
      '> Clean and Hexagonal Architecture'
    ];

    const FRONT_END = [
      '> Angular',
      '> HTML & CSS',
      '> Bootstrap',
      '> JavaScript'
    ];

    const DATABASE = [
      '> PostgreSQL',
      '> SQL Server',
      '> MySQL',
      '> MongoDB',
    ];

    const DEVOPS = [
      '> Git',
      '- Github | Bitbucket',
      '> Jira | Confluence | Bamboo',
      '> Azure | AWS',
      '> SonarQube | Fortify'
    ];

    const TESTING = [
      '> JUnit',
      '> Jest',
      '> Mockito',
      '> Postman',
      '> Json Server'
    ];

    this.skills = [
      {
        title: 'Back-End',
        icon: 'bi bi-braces',
        items: BACK_END,
      },
      {
        title: 'Front-End',
        icon: 'bi bi-code-slash',
        items: FRONT_END,
      },
      {
        title: 'Database',
        icon: 'bi bi-database',
        items: DATABASE,
      },
      {
        title: 'Testing',
        icon: 'bi bi-tools',
        items: TESTING,
      },
      {
        title: 'DevOps & Agile',
        icon: 'bi bi-git',
        items: DEVOPS,
      },
      {
        title: 'Languages',
        icon: 'bi bi-globe',
        items: ['English - Intermediate (B1)'],
      },
    ];
  }
}
