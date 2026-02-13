import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with projects list', () => {
    expect(component['projects']).toBeDefined();
    expect(component['projects'].length).toBeGreaterThan(0);
  });

  it('should have projects with required properties', () => {
    const project = component['projects'][0];
    expect(project.title).toBeDefined();
    expect(project.description).toBeDefined();
    expect(project.technologies).toBeDefined();
    expect(project.url).toBeDefined();
    expect(project.image).toBeDefined();
    expect(Array.isArray(project.technologies)).toBe(true);
  });

  it('should have IMEP Website project', () => {
    const siteImep = component['projects'].find(p =>
      p.title.toLowerCase().includes('imep')
    );
    expect(siteImep).toBeDefined();
    expect(siteImep?.url).toContain('igrejametodistapalmas.vercel.app');
  });

  it('should have Portfolio project', () => {
    const portfolio = component['projects'].find(p =>
      p.title.toLowerCase().includes('portfolio')
    );
    expect(portfolio).toBeDefined();
    expect(portfolio?.url).toContain('matheuspcouto-dev');
  });

  it('should have IrrIot project', () => {
    const irriot = component['projects'].find(p =>
      p.title.toLowerCase().includes('irriot')
    );
    expect(irriot).toBeDefined();
    expect(irriot?.url).toContain('github.com');
  });

  it('should open project URL in new tab', () => {
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);
    const project = component['projects'][0];

    component['goToProject'](project);

    expect(spy).toHaveBeenCalledWith(project.url, '_blank');
    spy.mockRestore();
  });

  it('should not open URL if project does not have URL', () => {
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);
    const projectWithoutUrl = {
      title: 'Test',
      description: 'Test',
      technologies: [],
      url: '',
      image: ''
    };

    component['goToProject'](projectWithoutUrl);

    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it('should have at least one project with Angular', () => {
    const angularProject = component['projects'].find(p =>
      p.technologies.some(tech => tech.toLowerCase().includes('angular'))
    );
    expect(angularProject).toBeDefined();
  });
});
