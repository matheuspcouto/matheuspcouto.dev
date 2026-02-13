import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';

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

  it('should initialize with skills list', () => {
    expect(component['skills']).toBeDefined();
    expect(component['skills'].length).toBe(6);
  });

  it('should have skills with required properties', () => {
    const skill = component['skills'][0];
    expect(skill.title).toBeDefined();
    expect(skill.icon).toBeDefined();
    expect(skill.items).toBeDefined();
    expect(Array.isArray(skill.items)).toBe(true);
  });

  it('should have Back-End section', () => {
    const backEnd = component['skills'].find(h => h.title === 'Back-End');
    expect(backEnd).toBeDefined();
    expect(backEnd?.items).toContain('> Java');
    expect(backEnd?.items).toContain('> NodeJS');
  });

  it('should have Front-End section', () => {
    const frontEnd = component['skills'].find(h => h.title === 'Front-End');
    expect(frontEnd).toBeDefined();
    expect(frontEnd?.items).toContain('> HTML & CSS');
    expect(frontEnd?.items).toContain('> Angular');
  });

  it('should have Database section', () => {
    const database = component['skills'].find(h => h.title === 'Database');
    expect(database).toBeDefined();
    expect(database?.items).toContain('> PostgreSQL');
    expect(database?.items).toContain('> MongoDB');
  });

  it('should have Testing section', () => {
    const testing = component['skills'].find(h => h.title === 'Testing');
    expect(testing).toBeDefined();
    expect(testing?.items).toContain('> Jest');
    expect(testing?.items).toContain('> JUnit');
  });

  it('should have DevOps & Agile section', () => {
    const devops = component['skills'].find(h => h.title === 'DevOps & Agile');
    expect(devops).toBeDefined();
    expect(devops?.items).toContain('> Git');
    expect(devops?.items).toContain('> Azure | AWS');
  });

  it('should have Languages section', () => {
    const languages = component['skills'].find(h => h.title === 'Languages');
    expect(languages).toBeDefined();
    expect(languages?.items).toContain('English - Intermediate (B1)');
  });
});
