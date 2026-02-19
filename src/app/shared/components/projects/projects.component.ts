import { Component } from '@angular/core';
import { MpcCardComponent, MpcButtonComponent } from 'mpc-lib-angular';

/**
 * Interface representing a project.
 * @interface Project
 */
interface Project {
  title: string;
  description: string;
  technologies: string[];
  url: string;
  image: string;
}

@Component({
  selector: 'projects',
  imports: [MpcCardComponent, MpcButtonComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  /**
   * List of projects.
   * @type {Project[]}
   */
  protected projects: Project[] = [];

  constructor() {
    this.projects = [
      {
        title: 'Institutional website of IMEP',
        description: 'This is the institutional website of the Methodist Church in Palmas, built using Angular, with the goal of presenting the church, its ministries, and events. The site features an administrative panel for content management and was built using a CI/CD pipeline through GitHub Actions.',
        technologies: [
          'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
          'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
          'https://img.shields.io/badge/Angular-6A0000?style=for-the-badge&logo=Angular&logoColor=white',
          'https://img.shields.io/badge/Github-black?style=for-the-badge&logo=Github&logoColor=white',
        ],
        url: 'https://igrejametodistapalmas.vercel.app',
        image: 'assets/img/projects/site-imep.png',
      },
      {
        title: 'MPC Components',
        description: 'MPC Components is a comprehensive Angular library featuring a collection of reusable components for web applications, including inputs, buttons, cards, modals, loaders, navigation, and more. The goal is to streamline the development of modern, responsive, and standardized interfaces.',
        technologies: [
          'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
          'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
          'https://img.shields.io/badge/Angular-6A0000?style=for-the-badge&logo=Angular&logoColor=white',
          'https://img.shields.io/badge/Github-black?style=for-the-badge&logo=Github&logoColor=white',
        ],
        url: 'https://mpc-components.vercel.app',
        image: 'assets/img/projects/mpc-components.png',
      },
      {
        title: 'Portfolio - Hávyla Ferreira',
        description: "Online portfolio of HR professional, Hávyla Ferreira Souza. Developed using modern web technologies such as HTML5, CSS3 and Javascript. The site elegantly presents Hávyla's professional trajectory, her accumulated experiences and main skills developed in the area. A digital showcase that highlights her expertise in people management.",
        technologies: [
          'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
          'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
          'https://img.shields.io/badge/Angular-6A0000?style=for-the-badge&logo=Angular&logoColor=white',
          'https://img.shields.io/badge/Github-black?style=for-the-badge&logo=Github&logoColor=white',
        ],
        url: 'https://havylafsouza-rh.vercel.app/',
        image: 'assets/img/projects/havyla.png',
      },
      {
        title: 'IrrIot - Smart Irrigation System',
        description:
          'The project presented at the 2019 Agrotins Fair consists of an integration between Arduino and a Java Web platform for efficient monitoring and control of an irrigation system. This innovative solution allows for resource savings and precision in the irrigation process, ensuring optimized water use for agricultural production.',
        technologies: [
          'https://img.shields.io/badge/Java-F7F7F7?style=for-the-badge&logo=CoffeeScript&logoColor=black',
          'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
          'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
        ],
        url: 'https://github.com/matheuspcouto/irriot',
        image: 'assets/img/projects/irriot.jpg',
      },
    ];
  }

  /**
   * Redirects to the project URL in a new tab.
   * @param {Project} project to be opened
   */
  protected goToProject(project: Project): void {
    if (project.url) {
      window.open(project.url, '_blank');
    }
  }
}
