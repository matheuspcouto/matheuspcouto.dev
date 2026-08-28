import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';
import { describe, it, expect, beforeEach } from 'vitest';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with work experiences list using signal', () => {
    expect(component['workExperiences']).toBeDefined();
    expect(component['workExperiences']().length).toBeGreaterThan(0);
  });

  it('should have tabs defined using signal', () => {
    expect(component['tabs']).toBeDefined();
    expect(component['tabs']()).toHaveLength(2);
    expect(component['tabs']()[0].titulo).toBe('Profissional');
    expect(component['tabs']()[1].titulo).toBe('Acadêmica');
  });

  it('should have first tab selected by default using signal', () => {
    expect(component['selectedTab']).toBeDefined();
    expect(component['selectedTab']()?.id).toBe('professional-experience');
  });

  it('should have work experiences with required properties', () => {
    const work = component['workExperiences']()[0];
    expect(work.title).toBeDefined();
    expect(work.period).toBeDefined();
    expect(work.company).toBeDefined();
    expect(work.activities).toBeDefined();
    expect(Array.isArray(work.activities)).toBe(true);
  });

  it('should have at least one work experience at Capgemini', () => {
    const capgeminiWork = component['workExperiences']().find(work =>
      work.company.toLowerCase().includes('capgemini')
    );
    expect(capgeminiWork).toBeDefined();
  });

  it('should have most recent work experience at NAVA', () => {
    const navaWork = component['workExperiences']().find(work =>
      work.company.toLowerCase().includes('nava')
    );
    expect(navaWork).toBeDefined();
    expect(navaWork?.period).toContain('Atualmente');
  });
});
