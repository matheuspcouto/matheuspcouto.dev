import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate age correctly using computed signal', () => {
    const now = new Date();
    const birthYear = 2000;
    const birthMonth = 4; // May (0-indexed)
    const birthDay = 23;

    let expectedAge = now.getFullYear() - birthYear;

    // Adjust if birthday hasn't occurred yet this year
    const monthDiff = now.getMonth() - birthMonth;
    const dayDiff = now.getDate() - birthDay;

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      expectedAge--;
    }

    expect(component['age']()).toBe(expectedAge);
  });

  it('should have age greater than 20 years', () => {
    expect(component['age']()).toBeGreaterThan(20);
  });

  it('should calculate years of experience correctly', () => {
    const now = new Date();
    const careerStartYear = 2021;
    const careerStartMonth = 2; // March (0-indexed)
    const careerStartDay = 1;

    let expectedYears = now.getFullYear() - careerStartYear;

    // Adjust if anniversary hasn't occurred yet this year
    const monthDiff = now.getMonth() - careerStartMonth;
    const dayDiff = now.getDate() - careerStartDay;

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      expectedYears--;
    }

    expect(component['yearsOfExperience']()).toBe(expectedYears);
  });

  it('should have years of experience greater than 3', () => {
    expect(component['yearsOfExperience']()).toBeGreaterThan(3);
  });

  it('should open resume in Portuguese', () => {
    const spy = vi.spyOn(window, 'open').mockImplementation(() => null);

    component['viewResumePT']();

    expect(spy).toHaveBeenCalledWith(
      'https://www.canva.com/design/DAF-pR8ynQw/2daYc25BT31YuFiDKvtJjw/view',
      '_blank'
    );
    spy.mockRestore();
  });

  it('should calculate age based on birth date 05/23/2000', () => {
    // Testing with different dates to verify calculation
    const today = new Date();
    const birth = new Date('2000-05-23');

    let calculatedAge = today.getFullYear() - birth.getFullYear();
    const currentMonth = today.getMonth();
    const birthMonth = birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && dayDiff < 0)) {
      calculatedAge--;
    }

    expect(component['age']()).toBe(calculatedAge);
  });

  it('should decrement age when birthday has not occurred yet this year (month before)', () => {
    // Mock date to January 15, 2026 (before May birthday)
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-01-15'));

    // Create new component with mocked date
    const newFixture = TestBed.createComponent(AboutComponent);
    const newComponent = newFixture.componentInstance;
    newFixture.detectChanges();

    // Age should be 25 (2026 - 2000 - 1 = 25 because birthday hasn't happened)
    expect(newComponent['age']()).toBe(25);
  });

  it('should decrement age when same month but day before birthday', () => {
    // Mock date to May 10, 2026 (same month, before day 23)
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-05-10'));

    // Create new component with mocked date
    const newFixture = TestBed.createComponent(AboutComponent);
    const newComponent = newFixture.componentInstance;
    newFixture.detectChanges();

    // Age should be 25 (2026 - 2000 - 1 = 25 because birthday hasn't happened yet)
    expect(newComponent['age']()).toBe(25);
  });

  it('should not decrement age when birthday has already occurred this year', () => {
    // Mock date to August 15, 2026 (after May birthday)
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-08-15'));

    // Create new component with mocked date
    const newFixture = TestBed.createComponent(AboutComponent);
    const newComponent = newFixture.componentInstance;
    newFixture.detectChanges();

    // Age should be 26 (2026 - 2000 = 26 because birthday already passed)
    expect(newComponent['age']()).toBe(26);
  });

  it('should calculate years of experience before March anniversary', () => {
    // Mock date to February 15, 2026 (before March anniversary)
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-02-15'));

    const newFixture = TestBed.createComponent(AboutComponent);
    const newComponent = newFixture.componentInstance;
    newFixture.detectChanges();

    // Should be 4 years (2026 - 2021 - 1 = 4 because March 1st hasn't occurred)
    expect(newComponent['yearsOfExperience']()).toBe(4);
  });

  it('should calculate years of experience after March anniversary', () => {
    // Mock date to April 15, 2026 (after March anniversary)
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-04-15'));

    const newFixture = TestBed.createComponent(AboutComponent);
    const newComponent = newFixture.componentInstance;
    newFixture.detectChanges();

    // Should be 5 years (2026 - 2021 = 5 because March 1st already passed)
    expect(newComponent['yearsOfExperience']()).toBe(5);
  });
});
