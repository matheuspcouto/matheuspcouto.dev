import { Component } from '@angular/core';
import { MpcCardEventoComponent, MpcTabsComponent, Tab } from 'mpc-lib-angular';

/**
 * Interface representing a work experience.
 * @interface WorkExperience
 */
interface WorkExperience {
  title: string;
  period: string;
  company: string;
  activities: string[];
}

@Component({
  selector: 'experience',
  imports: [MpcCardEventoComponent, MpcTabsComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  /**
   * List of work experiences.
   * @type {WorkExperience[]}
   */
  protected workExperiences: WorkExperience[] = [];

  /**
   * Available tabs in the experience section.
   * @type {Tab[]}
   */
  protected tabs: Tab[] = [
    { id: 'professional-experience', titulo: 'Professional' },
    { id: 'education', titulo: 'Education' }
  ];

  /**
   * Currently selected tab.
   * @type {Tab | undefined}
   */
  protected selectedTab?: Tab;

  constructor() {
    this.selectedTab = this.tabs[0];

    this.workExperiences = [
      {
        title: 'Intern',
        period: 'June 2019 - March 2021',
        company: 'SEDEM Palmas',
        activities: [
          'Provided Hardware and Software Support',
          'Managed Business Licenses',
          'Managed CNPJ (Brazilian tax ID), CNAE (Brazilian National Classification of Economic Activities), and other information for Companies and Micro enterprises',
          'Generated Reports',
        ],
      },
      {
        title: 'Backend Software Engineer',
        period: 'March 2021 - November 2021',
        company: 'Ecó Açu Tecnologia',
        activities: [
          'Worked on the development and maintenance of Public Administration Systems in Java using Hibernate, JPA, and JSF',
          'Administered as a DBA across multiple PostgreSQL database instances',
          'Created reports using Jasper',
        ],
      },
      {
        title: 'Full-stack Software Engineer',
        period: 'November 2021 - September 2025',
        company: 'Capgemini',
        activities: [
          'Worked on the development and maintenance of financial applications for Bradesco bank (Pix, Open Finance, and Mobile Recharge), which are used by thousands of users in Brazil',
          'Supervised other junior developers with code review and mentoring',
          'Implemented a feature to redesign and transform the visual identity of the Pix app for individuals, bringing a significant improvement to the user\'s UX/UI and total control over Pix functionalities',
          'Refactored REST APIs using SOLID and Clean Code principles, and structured them with hexagonal architecture and DDD',
        ],
      },
      {
        title: 'Full-stack Software Engineer',
        period: 'October 2025 - Present',
        company: 'Nava | Tech for Business',
        activities: [
          'I worked on a migration and technological evolution of over five hundred Microservices and REST APIs in Java, Node, and Angular applications for the company Bradesco Seguros, which are used by thousands of users in Brazil',
          'Used the support of AI agents such as Amazon Q Developer and GitHub Copilot',
          'Configured and monitored the deployment process in CI/CD pipelines with quality gate validation using tools like SonarQube, Fortify, and Amazon Inspector',
          'Supervised other junior developers with code review and mentoring',
        ],
      },
    ];

  }
}
