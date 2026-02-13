import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticlesComponent } from './articles.component';

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with articles list', () => {
    expect(component['articles']).toBeDefined();
    expect(component['articles'].length).toBeGreaterThan(0);
  });

  it('should have article with required properties', () => {
    const article = component['articles'][0];
    expect(article.title).toBeDefined();
    expect(article.publicationDate).toBeDefined();
    expect(article.journal).toBeDefined();
    expect(article.url).toBeDefined();
    expect(article.issn).toBeDefined();
  });

  it('should open article link in new tab', () => {
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);
    const url = 'https://test.com';

    component['goToArticle'](url);

    expect(spy).toHaveBeenCalledWith(url, '_blank');
    spy.mockRestore();
  });

  it('should have at least one article about ergonomics', () => {
    const ergonomicsArticle = component['articles'].find(article =>
      article.title.toLowerCase().includes('ergonomic')
    );
    expect(ergonomicsArticle).toBeDefined();
  });
});
