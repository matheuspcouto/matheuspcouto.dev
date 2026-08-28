/**
 * Componente da seção de projetos desenvolvidos.
 * Exibe cards de projetos com tecnologias e links.
 *
 * @example
 * <app-projects />
 *
 * @author Matheus Pimentel Do Couto
 */
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MpcCardComponent, MpcButtonComponent } from 'mpc-lib-angular';
import { Project } from '../../shared/models';
import { openInNewTab } from '../../shared/helpers';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MpcCardComponent, MpcButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  /**
   * Lista de projetos.
   */
  protected readonly projects = signal<readonly Project[]>([
    {
      title: 'Site da Igreja Metodista em Palmas',
      description: 'Este é o site institucional da Igreja Metodista em Palmas, desenvolvido com Angular para apresentar a igreja, seus ministérios e eventos de forma clara e acessível. Atualmente, o site funciona como o portal oficial de eventos e notícias da igreja, sendo utilizado ativamente por pelo menos 300 membros.',
      technologies: [
        'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
        'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
        'https://img.shields.io/badge/Angular-6A0000?style=for-the-badge&logo=Angular&logoColor=white',
        'https://img.shields.io/badge/Github-black?style=for-the-badge&logo=Github&logoColor=white',
      ],
      url: 'https://igrejametodistapalmas.vercel.app',
      image: 'img/projects/site-imep.png',
    },
    {
      title: 'MPC Components',
      description: 'A MPC Components é uma biblioteca Angular abrangente que oferece uma coleção de componentes reutilizáveis ​​para aplicações web, incluindo campos de entrada, botões, cards, modais, indicadores de carregamento, elementos de navegação e muito mais. O objetivo é agilizar o desenvolvimento de interfaces modernas, responsivas e padronizadas.',
      technologies: [
        'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
        'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
        'https://img.shields.io/badge/Angular-6A0000?style=for-the-badge&logo=Angular&logoColor=white',
        'https://img.shields.io/badge/Github-black?style=for-the-badge&logo=Github&logoColor=white',
      ],
      url: 'https://mpc-components.vercel.app',
      image: 'img/projects/mpc-components.png',
    },
    {
      title: 'Portfólio - Hávyla Ferreira',
      description: "Portfólio online da profissional de RH Hávyla Ferreira Souza, desenvolvido com Angular para apresentar sua trajetória profissional, experiência e competências-chave em um formato claro e estratégico. O site fortaleceu seu posicionamento profissional ao aprimorar a apresentação visual, estruturar o conteúdo e consolidar sua marca pessoal.",
      technologies: [
        'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
        'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
        'https://img.shields.io/badge/Angular-6A0000?style=for-the-badge&logo=Angular&logoColor=white',
        'https://img.shields.io/badge/Github-black?style=for-the-badge&logo=Github&logoColor=white',
      ],
      url: 'https://havylafsouza-rh.vercel.app/',
      image: 'img/projects/havyla.png',
    },
    {
      title: 'Irriot - Sistema de Irrigação Inteligente',
      description: 'O projeto apresentado na feira Agrotins 2019 consistiu na integração entre Arduino e uma plataforma web em Java. A solução foi desenvolvida para oferecer recursos de agricultura de precisão, promovendo o uso otimizado da água e maior eficiência no aproveitamento de recursos em ambientes de produção agrícola.',
      technologies: [
        'https://img.shields.io/badge/Java-F7F7F7?style=for-the-badge&logo=CoffeeScript&logoColor=black',
        'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
        'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
      ],
      url: 'https://github.com/matheuspcouto/irriot',
      image: 'img/projects/irriot.jpg',
    },
  ]);

  /**
   * Redireciona para a URL do projeto em uma nova aba.
   *
   * @param project - Projeto a ser aberto.
   */
  protected goToProject(project: Project): void {
    if (project.url) {
      openInNewTab(project.url);
    }
  }
}
