import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Router, NavigationEnd } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { MpcLoaderService } from 'mpc-lib-angular';
import { Subject } from 'rxjs';
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockRouter: Partial<Router>;
  let mockLoaderService: Partial<MpcLoaderService>;
  let routerEventsSubject: Subject<NavigationEnd>;

  beforeEach(async () => {
    routerEventsSubject = new Subject();

    mockRouter = {
      navigate: vi.fn(),
      events: routerEventsSubject.asObservable(),
      url: '/'
    } as Partial<Router>;

    mockLoaderService = {
      show: vi.fn(),
      hide: vi.fn(),
      isLoading: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: MpcLoaderService, useValue: mockLoaderService },
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have navigation items configured', () => {
    expect(component['navItems']).toBeDefined();
    expect(component['navItems'].length).toBeGreaterThan(0);
  });

  it('should have 8 navigation items', () => {
    expect(component['navItems']).toHaveLength(8);
    expect(component['navItems'][0].id).toBe('home');
    expect(component['navItems'][7].id).toBe('contact');
  });

  it('should call loaderService.show on construction', () => {
    expect(mockLoaderService.show).toHaveBeenCalled();
  });

  it('should have isLoading signal initialized as true', () => {
    expect(component['isLoading']()).toBe(true);
  });

  it('should call loaderService.hide after 2 seconds', async () => {
    fixture.detectChanges();

    // Espera o tempo real do timeout
    await new Promise(resolve => setTimeout(resolve, 2100));

    expect(mockLoaderService.hide).toHaveBeenCalled();
  });

  it('should set isLoading to false after 2 seconds', async () => {
    fixture.detectChanges();

    // Espera o tempo real do timeout
    await new Promise(resolve => setTimeout(resolve, 2100));

    expect(component['isLoading']()).toBe(false);
  });

  it('should scroll to top when NavigationEnd occurs', () => {
    const scrollToSpy = vi.fn();
    Object.defineProperty(window, 'scrollTo', { value: scrollToSpy, writable: true });

    fixture.detectChanges();

    const navigationEnd = new NavigationEnd(1, '/', '/');
    routerEventsSubject.next(navigationEnd);

    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('should open WhatsApp in new tab when openWhatsApp is called in browser', () => {
    const openSpy = vi.fn();
    Object.defineProperty(window, 'open', { value: openSpy, writable: true });

    component['openWhatsApp']();

    expect(openSpy).toHaveBeenCalledWith('https://wa.me/55639992014337', '_blank');
  });

  describe('Server platform scenarios', () => {
    let serverComponent: AppComponent;
    let serverFixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
      await TestBed.resetTestingModule();

      await TestBed.configureTestingModule({
        imports: [AppComponent],
        providers: [
          { provide: Router, useValue: mockRouter },
          { provide: MpcLoaderService, useValue: mockLoaderService },
          { provide: PLATFORM_ID, useValue: 'server' }
        ]
      }).compileComponents();

      serverFixture = TestBed.createComponent(AppComponent);
      serverComponent = serverFixture.componentInstance;
    });

    it('should not open WhatsApp when not in browser', () => {
      const openSpy = vi.fn();
      Object.defineProperty(window, 'open', { value: openSpy, writable: true });

      serverComponent['openWhatsApp']();

      expect(openSpy).not.toHaveBeenCalled();
    });
  });
});
