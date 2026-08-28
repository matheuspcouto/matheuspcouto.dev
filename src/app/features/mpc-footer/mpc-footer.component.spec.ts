import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MpcFooterComponent } from './mpc-footer.component';
import { describe, it, expect, beforeEach } from 'vitest';

describe('MpcFooterComponent', () => {
  let component: MpcFooterComponent;
  let fixture: ComponentFixture<MpcFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpcFooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MpcFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render footer correctly', () => {
    const compiled = fixture.nativeElement;
    expect(compiled).toBeTruthy();
  });

  it('should be a standalone component', () => {
    expect(component).toBeInstanceOf(MpcFooterComponent);
  });

  it('should have current year as signal', () => {
    const currentYear = new Date().getFullYear();
    expect(component['currentYear']()).toBe(currentYear);
  });

  it('should have phone number', () => {
    expect(component['phone']()).toBe('(63) 9 9201-4337');
  });

  it('should have social URLs as computed signal', () => {
    const urls = component['socialUrls']();
    expect(urls.GITHUB).toBe('https://github.com/matheuspcouto');
    expect(urls.LINKEDIN).toBe('https://www.linkedin.com/in/matheuspcouto/');
    expect(urls.INSTAGRAM).toBe('https://www.instagram.com/matheuspcouto/');
    expect(urls.PORTFOLIO).toBe('https://matheuspcouto-dev.vercel.app/');
  });
});
