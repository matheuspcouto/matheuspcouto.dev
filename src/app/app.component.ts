import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { ArticlesComponent } from './shared/components/articles/articles.component';
import { ExperienceComponent } from './shared/components/experience/experience.component';
import { CertificationsComponent } from './shared/components/certifications/certifications.component';
import { SkillsComponent } from './shared/components/skills/skills.component';
import { PageHeaderComponent } from './shared/components/page-header/page-header.component';
import { ProjectsComponent } from './shared/components/projects/projects.component';
import { AboutComponent } from './shared/components/about/about.component';
import { MpcBtnFloatComponent, MpcLoaderComponent, NavbarConfig, MpcNavbarComponent, MpcLoaderService } from 'mpc-lib-angular';
import AOS from 'aos';
import { Routes } from './shared/enums/routes-enum';
import { MpcFooterComponent } from './shared/components/mpc-footer/mpc-footer.component';
import { ContactComponent } from './shared/components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    PageHeaderComponent,
    AboutComponent,
    SkillsComponent,
    CertificationsComponent,
    ArticlesComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    MpcNavbarComponent,
    MpcFooterComponent,
    MpcLoaderComponent,
    MpcBtnFloatComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  /**
   * Initializes the platform identification component.
  */
  private readonly platformId: any = inject(PLATFORM_ID);

  /**
   * Defines the application routes.
   * @type {Router}
   */
  private readonly router: Router = inject(Router);

  /**
   * Controls the application loading state.
   * @type {boolean}
   */
  private readonly loaderService: MpcLoaderService = inject(MpcLoaderService);

  /**
   * Navigation tabs displayed in the top bar.
   * @type {NavbarConfig[]}
   */
  protected tabs: NavbarConfig[] = [
    { id: 'home', titulo: 'Home', rota: Routes.HOME, icone: 'bi bi-house-fill' },
    { id: 'about', titulo: 'About', rota: Routes.ABOUT, icone: 'bi bi-person-fill' },
    { id: 'skills', titulo: 'Skills', rota: Routes.SKILLS, icone: 'bi bi-lightning-fill' },
    { id: 'experience', titulo: 'Experience', rota: Routes.EXPERIENCE, icone: 'bi bi-briefcase-fill' },
    { id: 'certifications', titulo: 'Certifications', rota: Routes.CERTIFICATIONS, icone: 'bi bi-award-fill' },
    { id: 'projects', titulo: 'Projects', rota: Routes.PROJECTS, icone: 'bi bi-folder-fill' },
    { id: 'articles', titulo: 'Articles', rota: Routes.ARTICLES, icone: 'bi bi-journal-text' },
    { id: 'contact', titulo: 'Contact', rota: Routes.CONTACT, icone: 'bi bi-envelope-fill' }
  ];

  /**
   * Initializes the component and adds a listener to control the visibility of the scroll to top button.
   * @returns {void}
   */
  ngOnInit(): void {

    this.loaderService.show();

    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    setTimeout(() => this.loaderService.hide(), 2000);
  }

  /**
   * Opens WhatsApp in a new tab for contact.
   * @returns {void}
   */
  protected openWhatsApp(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.open('https://wa.me/55639992014337', '_blank');
    }
  }
}
