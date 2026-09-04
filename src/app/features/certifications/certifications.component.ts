/**
 * Componente da seção de certificações.
 * Exibe lista paginada de certificados profissionais.
 *
 * @example
 * <app-certifications />
 *
 * @author Matheus Pimentel Do Couto
 */
import { SlicePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MpcCardMenuComponent, MpcButtonComponent } from 'mpc-lib-angular';
import { Certification } from '../../shared/models';
import { openInNewTab } from '../../shared/helpers';

@Component({
  selector: 'app-certifications',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MpcCardMenuComponent, MpcButtonComponent, SlicePipe],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {

  /**
   * Lista de certificações.
   */
  protected readonly certifications = signal<readonly Certification[]>([
    {
      title: 'AWS Cloud Quest: Cloud Practitioner | AWS',
      icon: 'bi bi-amazon',
      completionDate: 'Março - 2026',
      url: 'https://www.credly.com/badges/7e118640-f8a7-47d6-b15e-be6aa6448491'
    },
    {
      title: 'AWS Cloud Quest: Generative AI Practitioner | AWS',
      icon: 'bi bi-amazon',
      completionDate: 'Março - 2026',
      url: 'https://www.credly.com/badges/f6382a54-eb8f-43a8-98e0-93d990012c33'
    },
    {
      title: 'AWS Partner: Technical Accredited | AWS',
      icon: 'bi bi-amazon',
      completionDate: 'Fevereiro - 2026',
      url: 'https://www.credly.com/badges/4d1ae9e7-4fae-496d-b6bf-71db9e586bbd'
    },
    {
      title: 'Programação em Java: do Básico ao Avançado | Udemy',
      icon: 'bi bi-filetype-java',
      completionDate: 'Outubro - 2022',
      url: 'https://www.udemy.com/certificate/UC-0f71c539-372d-493c-9ac1-4dfafc3cac84/'
    },
    {
      title: 'GitHub Foundations (GH-900) | Microsoft',
      icon: 'bi bi-github',
      completionDate: 'Setembro - 2026',
      url: 'https://learn.microsoft.com/pt-br/users/matheuspcouto/credentials/cda01dbe23f93f21?ref=https%3A%2F%2Fwww.linkedin.com%2F'
    },
    {
      title: 'Academia Angular | Impacta',
      icon: 'bi bi-filetype-js',
      completionDate: 'Novembro - 2021',
    },
    {
      title: 'Microsoft Azure: The Complete Guide | Udemy',
      icon: 'bi bi-microsoft',
      completionDate: 'Julho - 2023',
      url: 'https://udemy.com/certificate/UC-1293e798-05f5-488d-9671-1713dfa4bc98/'
    },
    {
      title: 'Spring Framework 5 | Udemy',
      icon: 'bi bi-filetype-java',
      completionDate: 'Abril - 2023',
      url: 'https://www.udemy.com/certificate/UC-090f45ab-bc0d-4016-bfd0-d11df6ade4d4/'
    },
    {
      title: 'Desenvolvimento Web Completo | Udemy',
      icon: 'bi bi-filetype-html',
      completionDate: 'January - 2023',
      url: 'https://udemy.com/certificate/UC-4601788e-45e3-4e71-accd-605b4e735b1e/'
    },
    {
      title: 'JSF for Beginners | Udemy',
      icon: 'bi bi-filetype-java',
      completionDate: 'Outubro - 2022',
      url: 'https://udemy.com/certificate/UC-1208c651-7487-484f-a3eb-7f4833d6032c/'
    },
    {
      title: 'JPA and Hibernate | Udemy',
      icon: 'bi bi-filetype-java',
      completionDate: 'Outubro - 2022',
      url: 'https://udemy.com/certificate/UC-9493b3e3-8172-4b85-8968-c6e7493d93ff/'
    },
    {
      title: 'Testes Unitários em Java: JUnit, Mockito and TDD | Udemy',
      icon: 'bi bi-filetype-java',
      completionDate: 'Outubro - 2022',
      url: 'https://www.udemy.com/certificate/UC-c1da9160-5c04-4197-87d8-0a5b2b2d1d4c/'
    },
    {
      title: 'Unit Testing for Typescript & NodeJs Developers with Jest | Udemy',
      icon: 'bi bi-filetype-js',
      completionDate: 'Outubro - 2022',
      url: 'https://www.udemy.com/certificate/UC-a470165f-fc55-40c0-a3ad-849931e5e865/'
    },
    {
      title: 'Git Completo | Udemy',
      icon: 'bi bi-git',
      completionDate: 'Maio - 2023',
      url: 'https://www.udemy.com/certificate/UC-dbe43478-080f-4f4e-92e7-2cef8edfe943/'
    },
    {
      title: 'Atlassian Bamboo | Udemy',
      icon: 'bi bi-gear',
      completionDate: 'Junho - 2023',
      url: 'https://www.udemy.com/certificate/UC-d1ef9257-c9ed-4253-af57-1228cc4dc14f/'
    },
    {
      title: 'HPE Fortify - Secure Code Analysis | Udemy',
      icon: 'bi bi-shield-lock',
      completionDate: 'Outubro - 2022',
      url: 'https://www.udemy.com/certificate/UC-540949bf-da50-481a-9ebd-b5bb34020db7/'
    },
    {
      title: 'Postman: The Complete Guide | Udemy',
      icon: 'bi bi-globe',
      completionDate: 'Outubro - 2022',
      url: 'https://udemy.com/certificate/UC-7d30b94e-831b-46d4-a967-0d5f465be054/'
    },
    {
      title: 'SQL Completo | Softblue',
      icon: 'bi bi-database',
      completionDate: 'Junho - 2019',
    },
    {
      title: 'Fundamentos de Desenvolvimento de Software| Microsoft and LinkedIn',
      icon: 'bi bi-microsoft',
      completionDate: 'Julho - 2023',
      url: 'https://www.linkedin.com/learning/certificates/18348bf148e88c4fa136ffbf75a1feb4c8bf6b6d930fd9d651a0acdebb96e852'
    },
    {
      title: 'Introduction to Software Engineering - IBM | Coursera',
      icon: 'bi bi-code',
      completionDate: 'Outubro - 2022',
      url: 'https://www.coursera.org/account/accomplishments/verify/NCVMRT355WXU'
    },
    {
      title: 'Lógica de Programação | Softblue',
      icon: 'bi bi-laptop',
      completionDate: 'Novembro - 2020',
    },
    {
      title: 'Upper Intermediate English (B2) | Education First',
      icon: 'bi bi-translate',
      completionDate: 'Fevereiro - 2026',
      url: 'https://cert.efset.org/EqCQ9H'
    },
    {
      title: 'Lei Geral de Proteção de Dados (LGPD) | Nava',
      icon: 'bi bi-shield-lock',
      completionDate: 'Outubro - 2025',
    },
  ]);

  /**
   * Índice atual para exibição de certificados (paginação).
   */
  protected certificateIndex = signal(3);

  /**
   * Incrementa o índice para exibir mais certificados.
   */
  protected increaseCertificateIndex(): void {
    this.certificateIndex.update(index => index + 3);
  }

  /**
   * Abre o link do certificado em uma nova aba.
   *
   * @param url - URL do certificado (opcional).
   */
  protected goToCertificate(url?: string): void {
    if (url) {
      openInNewTab(url);
    }
  }
}
