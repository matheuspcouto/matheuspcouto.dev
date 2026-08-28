import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { NavbarComponent, NavItem } from './navbar.component';
import { vi } from 'vitest';

describe('NavbarComponent', () => {
  const mockNavItems: NavItem[] = [
    { id: 'home', label: 'Home', rota: '#home', icon: 'bi bi-house-fill' },
    { id: 'about', label: 'Sobre', rota: '#about', icon: 'bi bi-person-fill' },
    { id: 'skills', label: 'Habilidades', rota: '#skills', icon: 'bi bi-lightning-fill' }
  ];

  describe('Plataforma Browser', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async () => {
      // Mock window.history.pushState
      Object.defineProperty(window, 'history', {
        value: {
          pushState: vi.fn()
        },
        writable: true
      });

      await TestBed.configureTestingModule({
        imports: [NavbarComponent],
        providers: [
          { provide: PLATFORM_ID, useValue: 'browser' }
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(NavbarComponent);
      component = fixture.componentInstance;
      fixture.componentRef.setInput('logo', '/img/profile.png');
      fixture.componentRef.setInput('items', mockNavItems);
      fixture.detectChanges();
    });

    it('deve criar o componente', () => {
      expect(component).toBeTruthy();
    });

    it('deve receber o logo via input', () => {
      expect(component.logo()).toBe('/img/profile.png');
    });

    it('deve receber os itens de navegação via input', () => {
      expect(component.items()).toEqual(mockNavItems);
      expect(component.items().length).toBe(3);
    });

    it('deve iniciar com menu fechado', () => {
      expect(component['isMenuOpen']()).toBe(false);
    });

    it('deve iniciar com home como item ativo', () => {
      expect(component['activeItemId']()).toBe('home');
    });

    describe('setupOffcanvasListeners', () => {
      it('deve sincronizar estado quando offcanvas é mostrado', () => {
        // Criar mock do elemento offcanvas
        const mockOffcanvas = document.createElement('div');
        mockOffcanvas.id = 'menuLateral';
        document.body.appendChild(mockOffcanvas);

        // Recriar componente para executar afterNextRender
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('logo', '/img/profile.png');
        fixture.componentRef.setInput('items', mockNavItems);
        fixture.detectChanges();

        // Simular evento shown.bs.offcanvas
        const shownEvent = new Event('shown.bs.offcanvas');
        mockOffcanvas.dispatchEvent(shownEvent);

        expect(component['isMenuOpen']()).toBe(true);

        // Simular evento hidden.bs.offcanvas
        const hiddenEvent = new Event('hidden.bs.offcanvas');
        mockOffcanvas.dispatchEvent(hiddenEvent);

        expect(component['isMenuOpen']()).toBe(false);

        document.body.removeChild(mockOffcanvas);
      });
    });

    describe('toggleMenu', () => {
      it('deve abrir o menu quando está fechado', () => {
        component['toggleMenu']();
        expect(component['isMenuOpen']()).toBe(true);
      });

      it('deve fechar o menu quando está aberto', () => {
        component['toggleMenu']();
        component['toggleMenu']();
        expect(component['isMenuOpen']()).toBe(false);
      });
    });

    describe('closeMenu', () => {
      it('deve fechar o menu', () => {
        component['toggleMenu']();
        expect(component['isMenuOpen']()).toBe(true);

        component['closeMenu']();
        expect(component['isMenuOpen']()).toBe(false);
      });
    });

    describe('isAbaAtiva', () => {
      it('deve retornar true para o item ativo', () => {
        const homeItem = mockNavItems[0];
        expect(component['isAbaAtiva'](homeItem)).toBe(true);
      });

      it('deve retornar false para item não ativo', () => {
        const aboutItem = mockNavItems[1];
        expect(component['isAbaAtiva'](aboutItem)).toBe(false);
      });
    });

    describe('navegarParaHome', () => {
      beforeEach(() => {
        // Mock window.scrollTo
        vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
        // Mock requestAnimationFrame para executar a animação até o fim
        let calls = 0;
        vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb: FrameRequestCallback) => {
          calls++;
          if (calls === 1) {
            cb(1000);
          } else if (calls === 2) {
            cb(1300);
          }
          return 0;
        });
      });

      afterEach(() => {
        vi.restoreAllMocks();
      });

      it('deve rolar para o topo e definir home como ativo', () => {
        component['navegarParaHome']();
        // Verifica que scrollTo foi chamado
        expect(window.scrollTo).toHaveBeenCalled();
        expect(component['activeItemId']()).toBe('home');
      });
    });

    describe('navegarParaAba', () => {
      beforeEach(() => {
        Object.defineProperty(window, 'scrollTo', {
          value: vi.fn(),
          writable: true
        });
      });

      it('deve navegar sem fechar menu (Bootstrap controla)', () => {
        component['toggleMenu']();
        expect(component['isMenuOpen']()).toBe(true);

        const mockElement = document.createElement('div');
        mockElement.id = 'about';
        mockElement.scrollIntoView = vi.fn();
        document.body.appendChild(mockElement);

        component['navegarParaAba'](mockNavItems[1]);

        // navegarParaAba desktop não fecha menu - Bootstrap faz isso no mobile
        expect(component['isMenuOpen']()).toBe(true);

        document.body.removeChild(mockElement);
      });

      it('deve atualizar o item ativo ao navegar', () => {
        const mockElement = document.createElement('div');
        mockElement.id = 'skills';
        mockElement.scrollIntoView = vi.fn();
        document.body.appendChild(mockElement);

        component['navegarParaAba'](mockNavItems[2]);

        expect(component['activeItemId']()).toBe('skills');

        document.body.removeChild(mockElement);
      });

      it('deve navegar para home quando rota é #home', () => {
        component['navegarParaAba'](mockNavItems[0]);
        expect(component['activeItemId']()).toBe('home');
      });

      it('deve lidar com rota que começa com /', () => {
        const itemComBarra: NavItem = { id: 'test', label: 'Test', rota: '/test', icon: 'bi bi-test' };
        const mockElement = document.createElement('div');
        mockElement.id = 'test';
        mockElement.scrollIntoView = vi.fn();
        document.body.appendChild(mockElement);

        component['navegarParaAba'](itemComBarra);
        expect(component['activeItemId']()).toBe('test');

        document.body.removeChild(mockElement);
      });

      it('deve lidar com elemento que não existe', () => {
        const itemInexistente: NavItem = { id: 'inexistente', label: 'Inexistente', rota: '#inexistente', icon: 'bi bi-test' };
        component['navegarParaAba'](itemInexistente);
        // Não deve dar erro, apenas não encontra o elemento
        expect(component['isMenuOpen']()).toBe(false);
      });
    });

    describe('navegarParaAbaMobile', () => {
      beforeEach(() => {
        vi.useFakeTimers();
        Object.defineProperty(window, 'scrollTo', {
          value: vi.fn(),
          writable: true
        });
      });

      afterEach(() => {
        vi.useRealTimers();
      });

      it('deve aguardar delay do offcanvas antes de navegar', () => {
        const mockElement = document.createElement('div');
        mockElement.id = 'about';
        document.body.appendChild(mockElement);

        component['navegarParaAbaMobile'](mockNavItems[1]);

        // Antes do delay, ainda está em home
        expect(component['activeItemId']()).toBe('home');

        // Avança o tempo do delay (350ms)
        vi.advanceTimersByTime(350);

        // Após o delay, navega para about
        expect(component['activeItemId']()).toBe('about');

        document.body.removeChild(mockElement);
      });
    });

    describe('extrairIdDaRota', () => {
      it('deve remover # do início da rota', () => {
        const resultado = component['extrairIdDaRota']('#about');
        expect(resultado).toBe('about');
      });

      it('deve remover / do início da rota', () => {
        const resultado = component['extrairIdDaRota']('/contact');
        expect(resultado).toBe('contact');
      });

      it('deve retornar rota sem alteração quando não tem prefixo', () => {
        const resultado = component['extrairIdDaRota']('skills');
        expect(resultado).toBe('skills');
      });
    });

    describe('onWindowScroll', () => {
      it('deve atualizar item ativo baseado na seção visível', () => {
        const mockElement = document.createElement('div');
        mockElement.id = 'about';
        mockElement.scrollIntoView = vi.fn();
        document.body.appendChild(mockElement);

        // Mock getBoundingClientRect
        mockElement.getBoundingClientRect = vi.fn().mockReturnValue({
          top: 50,
          bottom: 500,
          left: 0,
          right: 100,
          width: 100,
          height: 450,
          x: 0,
          y: 50,
          toJSON: () => ({})
        });

        Object.defineProperty(window, 'scrollY', { value: 200, writable: true });
        component.onWindowScroll();

        expect(component['activeItemId']()).toBe('about');

        document.body.removeChild(mockElement);
      });

      it('deve definir home como ativo quando no topo da página', () => {
        // Criar elemento home para o teste
        const mockElement = document.createElement('div');
        mockElement.id = 'home';
        mockElement.scrollIntoView = vi.fn();
        mockElement.getBoundingClientRect = vi.fn().mockReturnValue({
          top: 50, // Elemento visível no topo
          bottom: 400,
          left: 0,
          right: 100,
          width: 100,
          height: 450,
          x: 0,
          y: 50,
          toJSON: () => ({})
        });
        document.body.appendChild(mockElement);

        Object.defineProperty(window, 'scrollY', { value: 50, writable: true });
        component.onWindowScroll();

        expect(component['activeItemId']()).toBe('home');

        document.body.removeChild(mockElement);
      });

      it('deve processar rotas com # corretamente', () => {
        const mockElement = document.createElement('div');
        mockElement.id = 'skills';
        mockElement.scrollIntoView = vi.fn();
        mockElement.getBoundingClientRect = vi.fn().mockReturnValue({
          top: 50,
          bottom: 500,
          left: 0,
          right: 100,
          width: 100,
          height: 450,
          x: 0,
          y: 50,
          toJSON: () => ({})
        });
        document.body.appendChild(mockElement);

        Object.defineProperty(window, 'scrollY', { value: 200, writable: true });
        component.onWindowScroll();

        expect(component['activeItemId']()).toBe('skills');

        document.body.removeChild(mockElement);
      });

      it('deve processar rotas com / no updateActiveSection', () => {
        // Usar items com rotas que começam com /
        const itemsComBarra: NavItem[] = [
          { id: 'home', label: 'Home', rota: '/home', icon: 'bi bi-house-fill' },
          { id: 'test', label: 'Test', rota: '/test', icon: 'bi bi-test' }
        ];
        fixture.componentRef.setInput('items', itemsComBarra);
        fixture.detectChanges();

        const mockElement = document.createElement('div');
        mockElement.id = 'test';
        mockElement.scrollIntoView = vi.fn();
        mockElement.getBoundingClientRect = vi.fn().mockReturnValue({
          top: 50,
          bottom: 500,
          left: 0,
          right: 100,
          width: 100,
          height: 450,
          x: 0,
          y: 50,
          toJSON: () => ({})
        });
        document.body.appendChild(mockElement);

        Object.defineProperty(window, 'scrollY', { value: 200, writable: true });
        component.onWindowScroll();

        expect(component['activeItemId']()).toBe('test');

        document.body.removeChild(mockElement);
      });

      it('deve setar home quando scrollY < 100 e nenhuma seção visível', () => {
        // Reset activeItemId para um valor diferente
        component['activeItemId'].set('other');

        // Quando scrollY < 100 e não há seções visíveis, deve setar home
        Object.defineProperty(window, 'scrollY', { value: 50, writable: true });

        // Limpar quaisquer elementos mock anteriores
        const existingElements = document.querySelectorAll('[id]');
        existingElements.forEach(el => {
          if (['home', 'about', 'skills'].includes(el.id)) {
            el.remove();
          }
        });

        component.onWindowScroll();

        expect(component['activeItemId']()).toBe('home');
      });
    });

    describe('onWindowResize', () => {
      it('deve fechar menu mobile ao redimensionar para desktop', () => {
        component['toggleMenu']();
        expect(component['isMenuOpen']()).toBe(true);

        Object.defineProperty(window, 'innerWidth', { value: 1200, writable: true });
        component.onWindowResize();

        expect(component['isMenuOpen']()).toBe(false);
      });

      it('deve manter menu aberto se ainda em mobile', () => {
        component['toggleMenu']();

        Object.defineProperty(window, 'innerWidth', { value: 768, writable: true });
        component.onWindowResize();

        expect(component['isMenuOpen']()).toBe(true);
      });

      it('não deve fazer nada se menu está fechado', () => {
        expect(component['isMenuOpen']()).toBe(false);
        Object.defineProperty(window, 'innerWidth', { value: 1200, writable: true });
        component.onWindowResize();
        expect(component['isMenuOpen']()).toBe(false);
      });
    });

    describe('Renderização HTML', () => {
      it('deve renderizar o logo no header desktop', () => {
        const logo = fixture.nativeElement.querySelector('.header-desktop .logo img');
        expect(logo).toBeTruthy();
        expect(logo.getAttribute('src')).toBe('/img/profile.png');
      });

      it('deve renderizar todos os itens do menu desktop', () => {
        const menuItems = fixture.nativeElement.querySelectorAll('.header-desktop .navbar li');
        expect(menuItems.length).toBe(3);
      });

      it('deve renderizar todos os itens do menu mobile', () => {
        const mobileItems = fixture.nativeElement.querySelectorAll('.offcanvas-body li');
        expect(mobileItems.length).toBe(3);
      });

      it('deve renderizar o botão hamburger', () => {
        const toggle = fixture.nativeElement.querySelector('.mobile-nav-toggle');
        expect(toggle).toBeTruthy();
      });

      it('deve ter role navigation na nav', () => {
        const nav = fixture.nativeElement.querySelector('nav');
        expect(nav.getAttribute('role')).toBe('navigation');
      });

      it('deve exibir apenas texto no menu desktop (sem ícones)', () => {
        const desktopLinks = fixture.nativeElement.querySelectorAll('.header-desktop .navbar a');
        desktopLinks.forEach((link: HTMLElement) => {
          const icon = link.querySelector('i');
          expect(icon).toBeNull();
        });
      });

      it('deve exibir ícone e texto no menu mobile', () => {
        const mobileLinks = fixture.nativeElement.querySelectorAll('.offcanvas-body a');
        mobileLinks.forEach((link: HTMLElement) => {
          const icon = link.querySelector('i');
          expect(icon).toBeTruthy();
        });
      });

      it('deve ter evento keydown.enter no menu mobile para acessibilidade', () => {
        const mobileLinks = fixture.nativeElement.querySelectorAll('.offcanvas-body a');
        expect(mobileLinks.length).toBeGreaterThan(0);
        // Verifica que há listeners de teclado (indiretamente via atributos)
        mobileLinks.forEach((link: HTMLElement) => {
          expect(link.getAttribute('tabindex')).toBe('0');
        });
      });
    });
  });

  describe('Plataforma Server', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async () => {
      await TestBed.resetTestingModule();

      await TestBed.configureTestingModule({
        imports: [NavbarComponent],
        providers: [
          { provide: PLATFORM_ID, useValue: 'server' }
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(NavbarComponent);
      component = fixture.componentInstance;
      fixture.componentRef.setInput('logo', '/img/profile.png');
      fixture.componentRef.setInput('items', mockNavItems);
      fixture.detectChanges();
    });

    it('não deve executar onWindowScroll no server', () => {
      const initialActive = component['activeItemId']();
      component.onWindowScroll();
      expect(component['activeItemId']()).toBe(initialActive);
    });

    it('não deve executar onWindowResize no server', () => {
      component['toggleMenu']();
      const initialMenuState = component['isMenuOpen']();
      component.onWindowResize();
      expect(component['isMenuOpen']()).toBe(initialMenuState);
    });
  });
});
