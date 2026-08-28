/**
 * Componente da seção de experiência profissional e educacional.
 * Exibe timeline de carreira e formação acadêmica.
 *
 * @example
 * <app-experience />
 *
 * @author Matheus Pimentel Do Couto
 */
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MpcCardEventoComponent, MpcTabsComponent, Tab } from 'mpc-lib-angular';
import { WorkExperience } from '../../shared/models';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MpcCardEventoComponent, MpcTabsComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  /**
   * Abas disponíveis na seção de experiência.
   */
  protected readonly tabs = signal<Tab[]>([
    { id: 'professional-experience', titulo: 'Profissional' },
    { id: 'education', titulo: 'Acadêmica' }
  ]);

  /**
   * Aba selecionada atualmente.
   */
  protected selectedTab = signal<Tab | undefined>(this.tabs()[0]);

  /**
   * Lista de experiências profissionais.
   */
  protected readonly workExperiences = signal<readonly WorkExperience[]>([
    {
      title: 'Estagiário de TI (Presencial)',
      period: 'Junho de 2019 - Março de 2021',
      company: 'Secretaria de desenvolvimento Econômico - SEDEM',
      activities: [
        'Prestei suporte de hardware e software aos usuários e sistemas internos.',
        'Realizei o gerenciamento de licenças empresariais e informações cadastrais de empresas e microempresas. ',
        'Gerenciei informações como CNPJ, CNAE e demais dados cadastrais de empresas. ',
        'Elaborei relatórios operacionais para apoio às atividades da secretaria.',
      ],
    },
    {
      title: 'Backend Developer (Presencial)',
      period: 'Março de 2021 - Novembro de 2021',
      company: 'Ecó Açu Tecnologia',
      activities: [
        'Desenvolvi plataformas web para a Administração Pública utilizando Java, Hibernate, JPA e JSF.',
        'Atuei na administração de múltiplas instâncias de PostgreSQL, realizando atividades de DBA.',
        'Desenvolvi relatórios utilizando JasperReports.',
      ],
    },
    {
      title: 'Full-Stack Software Engineer (Remoto)',
      period: 'Novembro de 2021 - Setembro de 2025',
      company: 'Capgemini',
      activities: [
        'Desenvolvi aplicações financeiras para o Banco Bradesco, incluindo Pix, Open Finance e Recarga de Celular, utilizando Java, Node.js e Angular, contribuindo para a escalabilidade dos sistemas e atendendo a milhares de usuários em todo o Brasil. ',
        'Atuei na mentoria de desenvolvedores juniores e em revisões de código, contribuindo para o aumento da qualidade do código e a redução da incidência de bugs. ',
        'Implementei funcionalidades para a reformulação visual e transformação da identidade do aplicativo Bradesco Pix para pessoas físicas, proporcionando melhorias significativas na experiência do usuário (UX/UI) e maior controle sobre as funcionalidades do Pix.',
        'Refatorei APIs REST utilizando princípios de SOLID e Clean Code, estruturando as aplicações com Arquitetura Hexagonal e Domain-Driven Design (DDD), com foco em manutenibilidade, organização e evolução dos sistemas.',
      ],
    },
    {
      title: 'Full-Stack Software Engineer (Remoto)',
      period: 'Outubro de 2025 - Atualmente',
      company: 'Nava | Tech for Business',
      activities: [
        'Liderei a migração e modernização de mais de 500 APIs REST para a Bradesco Seguros, utilizando Java, Node.js e Angular, com foco em evolução tecnológica, qualidade, desempenho e manutenibilidade.',
        'Utilizei ferramentas e agentes de IA, como Claude Code e Amazon Q Developer, para apoiar atividades de desenvolvimento e engenharia de software.',
        'Participei como um dos primeiros engenheiros na homologação do Sphere AI, ferramenta proprietária de inteligência artificial da NAVA.',
        'Atuei na correção de vulnerabilidades e CVEs de segurança e no acompanhamento de implantações por meio de pipelines de CI/CD, com validação de quality gates utilizando SonarQube, Fortify, Gitleaks e Amazon Inspector.',
        'Atuei na remoção de secrets hardcoded das aplicações, utilizando Azure Key Vault para centralização e gerenciamento seguro de credenciais e segredos, contribuindo para a redução de riscos de segurança e melhoria da conformidade das aplicações.',
        'Atuei na mentoria de desenvolvedores juniores e em revisões de código, contribuindo para o aumento da qualidade do código e a redução da incidência de bugs.'
      ],
    },
  ]);
}
