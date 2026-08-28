import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
import { describe, it, expect, beforeEach } from 'vitest';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with skills list using signal', () => {
    expect(component['skills']).toBeDefined();
    expect(component['skills']()).toHaveLength(8);
  });

  it('should have skills with required properties', () => {
    const skill = component['skills']()[0];
    expect(skill.title).toBeDefined();
    expect(skill.icon).toBeDefined();
    expect(skill.items).toBeDefined();
    expect(Array.isArray(skill.items)).toBe(true);
  });

  it('should have Back-End section', () => {
    const backEnd = component['skills']().find(h => h.title === 'Back-End');
    expect(backEnd).toBeDefined();
  });

  it('should have Front-End section', () => {
    const frontEnd = component['skills']().find(h => h.title === 'Front-End');
    expect(frontEnd).toBeDefined();
  });

  it('should have Banco de Dados section', () => {
    const database = component['skills']().find(h => h.title === 'Banco de Dados');
    expect(database).toBeDefined();
  });

  it('should have Segurança & Qualidade section', () => {
    const testing = component['skills']().find(h => h.title === 'Segurança & Qualidade');
    expect(testing).toBeDefined();
  });

  it('should have Cloud, DevOps & Scrum section', () => {
    const devops = component['skills']().find(h => h.title === 'Cloud, DevOps & Scrum');
    expect(devops).toBeDefined();
  });

  it('should have Idiomas section', () => {
    const languages = component['skills']().find(h => h.title === 'Idiomas');
    expect(languages).toBeDefined();
  });
});
