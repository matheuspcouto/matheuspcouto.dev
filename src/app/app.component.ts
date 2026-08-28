/**
 * Componente principal da aplicação.
 * Orquestra a navegação, loader e inicialização de bibliotecas externas.
 *
 * @author Matheus Pimentel Do Couto
 */
import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, inject, PLATFORM_ID, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ArticlesComponent } from './features/articles/articles.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { CertificationsComponent } from './features/certifications/certifications.component';
import { SkillsComponent } from './features/skills/skills.component';
import { PageHeaderComponent } from './features/page-header/page-header.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { AboutComponent } from './features/about/about.component';
import { MpcBtnFloatComponent, MpcLoaderComponent, MpcLoaderService } from 'mpc-lib-angular';
import AOS from 'aos';
import { Routes } from './shared/enums/routes-enum';
import { MpcFooterComponent } from './features/mpc-footer/mpc-footer.component';
import { ContactComponent } from './features/contact/contact.component';
import { WHATSAPP_URL, LOADER_DELAY_MS } from './shared/constants';
import { openInNewTab } from './shared/helpers';
import { NavbarComponent, NavItem } from './features/navbar/navbar.component';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PageHeaderComponent,
    AboutComponent,
    SkillsComponent,
    CertificationsComponent,
    ArticlesComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    NavbarComponent,
    MpcFooterComponent,
    MpcLoaderComponent,
    MpcBtnFloatComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly loaderService = inject(MpcLoaderService);
  private readonly destroyRef = inject(DestroyRef);

  /** Indica se o loader está visível. */
  protected readonly isLoading = signal(true);

  /**
   * Itens de navegação exibidos na barra superior.
   */
  protected readonly navItems: NavItem[] = [
    { id: 'home', label: 'Home', rota: Routes.HOME, icon: 'bi bi-house-fill' },
    { id: 'about', label: 'Sobre', rota: Routes.ABOUT, icon: 'bi bi-person-fill' },
    { id: 'skills', label: 'Habilidades', rota: Routes.SKILLS, icon: 'bi bi-lightning-fill' },
    { id: 'experience', label: 'Experiência', rota: Routes.EXPERIENCE, icon: 'bi bi-briefcase-fill' },
    { id: 'certifications', label: 'Certificações', rota: Routes.CERTIFICATIONS, icon: 'bi bi-award-fill' },
    { id: 'projects', label: 'Projetos', rota: Routes.PROJECTS, icon: 'bi bi-folder-fill' },
    { id: 'articles', label: 'Artigos', rota: Routes.ARTICLES, icon: 'bi bi-journal-text' },
    { id: 'contact', label: 'Contato', rota: Routes.CONTACT, icon: 'bi bi-envelope-fill' }
  ];

  constructor() {
    this.loaderService.show();

    // Usa afterNextRender para código que precisa do DOM (Angular 21+ pattern)
    afterNextRender(() => {
      this.initializeAOS();
      this.setupRouterScrollBehavior();
      this.hideLoaderAfterDelay();
    });
  }

  /**
   * Inicializa a biblioteca AOS para animações de scroll.
   */
  private initializeAOS(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  /**
   * Configura o comportamento de scroll ao navegar entre rotas.
   */
  private setupRouterScrollBehavior(): void {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /**
   * Esconde o loader após um delay.
   */
  private hideLoaderAfterDelay(): void {
    setTimeout(() => {
      this.loaderService.hide();
      this.isLoading.set(false);
    }, LOADER_DELAY_MS);
  }

  /**
   * Abre o WhatsApp em uma nova aba para contato.
   */
  protected openWhatsApp(): void {
    if (isPlatformBrowser(this.platformId)) {
      openInNewTab(WHATSAPP_URL);
    }
  }
}
