import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MpcCardMenuComponent, MpcButtonComponent } from "mpc-lib-angular";

/**
 * Interface representing a certification.
 * @interface Certification
 */
interface Certification {
  title: string;
  icon: string;
  completionDate: string;
  url?: string;
}

@Component({
  selector: 'certifications',
  imports: [MpcCardMenuComponent, MpcButtonComponent, SlicePipe],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {

  /**
   * List of certifications.
   * @type {Certification[]}
   */
  protected certifications: Certification[] = [];

  /**
   * Current index for displaying certificates.
   * @type {number}
   */
  protected certificateIndex: number = 3;

  constructor() {
    this.certifications = [
      {
        title: 'Java Programming - Basic to Advanced | Udemy',
        icon: 'bi bi-filetype-java',
        completionDate: 'October - 2022',
        url: 'https://www.udemy.com/certificate/UC-0f71c539-372d-493c-9ac1-4dfafc3cac84/'
      },
      {
        title: 'Angular Academy | Impacta',
        icon: 'bi bi-filetype-js',
        completionDate: 'November - 2021',
      },
      {
        title: 'Microsoft Azure: The Complete Guide | Udemy',
        icon: 'bi bi-microsoft',
        completionDate: 'July - 2023',
        url: 'https://udemy.com/certificate/UC-1293e798-05f5-488d-9671-1713dfa4bc98/'
      },
      {
        title: 'Spring Framework 5 | Udemy',
        icon: 'bi bi-filetype-java',
        completionDate: 'April - 2023',
        url: 'https://www.udemy.com/certificate/UC-090f45ab-bc0d-4016-bfd0-d11df6ade4d4/'
      },
      {
        title: 'Complete Web Development | Udemy',
        icon: 'bi bi-filetype-html',
        completionDate: 'January - 2023',
        url: 'https://udemy.com/certificate/UC-4601788e-45e3-4e71-accd-605b4e735b1e/'
      },
      {
        title: 'JSF for Beginners | Udemy',
        icon: 'bi bi-filetype-java',
        completionDate: 'October - 2022',
        url: 'https://udemy.com/certificate/UC-1208c651-7487-484f-a3eb-7f4833d6032c/'
      },
      {
        title: 'JPA and Hibernate | Udemy',
        icon: 'bi bi-filetype-java',
        completionDate: 'October - 2022',
        url: 'https://udemy.com/certificate/UC-9493b3e3-8172-4b85-8968-c6e7493d93ff/'
      },
      {
        title: 'Unit Testing in Java: JUnit, Mockito and TDD | Udemy',
        icon: 'bi bi-filetype-java',
        completionDate: 'October - 2022',
        url: 'https://www.udemy.com/certificate/UC-c1da9160-5c04-4197-87d8-0a5b2b2d1d4c/'
      },
      {
        title: 'Unit Testing for Typescript & NodeJs Developers with Jest | Udemy',
        icon: 'bi bi-filetype-js',
        completionDate: 'October - 2022',
        url: 'https://www.udemy.com/certificate/UC-a470165f-fc55-40c0-a3ad-849931e5e865/'
      },
      {
        title: 'Complete Git | Udemy',
        icon: 'bi bi-git',
        completionDate: 'May - 2023',
        url: 'https://www.udemy.com/certificate/UC-dbe43478-080f-4f4e-92e7-2cef8edfe943/'
      },
      {
        title: 'Atlassian Bamboo | Udemy',
        icon: 'bi bi-gear',
        completionDate: 'June - 2023',
        url: 'https://www.udemy.com/certificate/UC-d1ef9257-c9ed-4253-af57-1228cc4dc14f/'
      },
      {
        title: 'HPE Fortify - Secure Code Analysis | Udemy',
        icon: 'bi bi-shield-lock',
        completionDate: 'October - 2022',
        url: 'https://www.udemy.com/certificate/UC-540949bf-da50-481a-9ebd-b5bb34020db7/'
      },
      {
        title: 'Postman: The Complete Guide | Udemy',
        icon: 'bi bi-globe',
        completionDate: 'October - 2022',
        url: 'https://udemy.com/certificate/UC-7d30b94e-831b-46d4-a967-0d5f465be054/'
      },
      {
        title: 'Complete SQL | Softblue',
        icon: 'bi bi-database',
        completionDate: 'June - 2019',
      },
      {
        title: 'Software Development Fundamentals | Microsoft and LinkedIn',
        icon: 'bi bi-microsoft',
        completionDate: 'July - 2023',
        url: 'https://www.linkedin.com/learning/certificates/18348bf148e88c4fa136ffbf75a1feb4c8bf6b6d930fd9d651a0acdebb96e852'
      },
      {
        title: 'Introduction to Software Engineering - IBM | Coursera',
        icon: 'bi bi-code',
        completionDate: 'October - 2022',
        url: 'https://www.coursera.org/account/accomplishments/verify/NCVMRT355WXU'
      },
      {
        title: 'Programming Logic | Softblue',
        icon: 'bi bi-laptop',
        completionDate: 'November - 2020',
      },
      {
        title: 'Upper Intermediate English (B2) | Education First',
        icon: 'bi bi-translate',
        completionDate: 'Feb - 2026',
        url: 'https://cert.efset.org/EqCQ9H'
      },
      {
        title: 'Data Protection General Law | Nava',
        icon: 'bi bi-shield-lock',
        completionDate: 'October - 2025',
      },
    ];
  }

  /**
   * Increases the certificate index to display more.
   */
  protected increaseCertificateIndex(): void {
    this.certificateIndex += 3;
  }

  /**
   * Opens the certificate link in a new tab.
   * @param url Certificate URL.
   */
  protected goToCertificate(url?: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
