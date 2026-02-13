import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Router, NavigationEnd } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { MpcLoaderService } from 'mpc-lib-angular';
import { of, Subject } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockRouter: jest.Mocked<Router>;
  let mockLoaderService: jest.Mocked<MpcLoaderService>;
  let routerEventsSubject: Subject<any>;

  beforeEach(async () => {
    routerEventsSubject = new Subject();

    mockRouter = {
      navigate: jest.fn(),
      events: routerEventsSubject.asObservable(),
      url: '/'
    } as any;

    mockLoaderService = {
      show: jest.fn(),
      hide: jest.fn(),
      isLoading: jest.fn()
    } as any;

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
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have navigation tabs configured', () => {
    expect(component['tabs']).toBeDefined();
    expect(component['tabs'].length).toBeGreaterThan(0);
  });

  it('should call loaderService.show on ngOnInit', () => {
    component.ngOnInit();
    expect(mockLoaderService.show).toHaveBeenCalled();
  });

  it('should call loaderService.hide after timeout', () => {
    jest.useFakeTimers();
    component.ngOnInit();

    jest.advanceTimersByTime(2000);

    expect(mockLoaderService.hide).toHaveBeenCalled();
    jest.useRealTimers();
  });

  it('should scroll to top when NavigationEnd occurs in browser', () => {
    const scrollToSpy = jest.fn();
    Object.defineProperty(window, 'scrollTo', { value: scrollToSpy });

    component.ngOnInit();

    const navigationEnd = new NavigationEnd(1, '/', '/');
    routerEventsSubject.next(navigationEnd);

    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('should open WhatsApp in new tab when openWhatsApp is called in browser', () => {
    const openSpy = jest.fn();
    Object.defineProperty(window, 'open', { value: openSpy });

    component['openWhatsApp']();

    expect(openSpy).toHaveBeenCalledWith('https://wa.me/55639992014337', '_blank');
  });

  describe('Server platform scenarios', () => {
    let serverComponent: AppComponent;
    let serverFixture: ComponentFixture<AppComponent>;
    let serverRouterEventsSubject: Subject<any>;
    let serverMockRouter: jest.Mocked<Router>;

    beforeEach(async () => {
      serverRouterEventsSubject = new Subject();

      serverMockRouter = {
        navigate: jest.fn(),
        events: serverRouterEventsSubject.asObservable(),
        url: '/'
      } as any;

      await TestBed.resetTestingModule();

      await TestBed.configureTestingModule({
        imports: [AppComponent],
        providers: [
          { provide: Router, useValue: serverMockRouter },
          { provide: MpcLoaderService, useValue: mockLoaderService },
          { provide: PLATFORM_ID, useValue: 'server' }
        ]
      }).compileComponents();

      serverFixture = TestBed.createComponent(AppComponent);
      serverComponent = serverFixture.componentInstance;
    });

    it('should not scroll when not in browser', () => {
      const scrollToSpy = jest.fn();
      Object.defineProperty(window, 'scrollTo', { value: scrollToSpy });

      serverComponent.ngOnInit();

      const navigationEnd = new NavigationEnd(1, '/', '/');
      serverRouterEventsSubject.next(navigationEnd);

      expect(scrollToSpy).not.toHaveBeenCalled();
    });

    it('should not open WhatsApp when not in browser', () => {
      const openSpy = jest.fn();
      Object.defineProperty(window, 'open', { value: openSpy });

      serverComponent['openWhatsApp']();

      expect(openSpy).not.toHaveBeenCalled();
    });
  });
});
