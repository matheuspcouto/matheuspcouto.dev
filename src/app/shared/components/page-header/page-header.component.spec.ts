import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageHeaderComponent } from './page-header.component';

describe('PageHeaderComponent', () => {
  let component: PageHeaderComponent;
  let fixture: ComponentFixture<PageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PageHeaderComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have array of texts for typing', () => {
    expect(component['typedTexts']).toBeDefined();
    expect(Array.isArray(component['typedTexts'])).toBe(true);
    expect(component['typedTexts'].length).toBeGreaterThan(0);
  });

  it('should have "Hello World !" as initial text', () => {
    expect(component['typedTexts']).toContain('Hello World !');
  });

  it('should initialize with index 0', () => {
    expect(component['currentIndex']).toBe(0);
  });

  it('should initialize with empty text', () => {
    expect(component['currentText']).toBe('');
  });

  it('should initialize with isDeleting false', () => {
    expect(component['isDeleting']).toBe(false);
  });

  it('should have defined typing speeds', () => {
    expect(component['typeSpeed']).toBe(100);
    expect(component['deleteSpeed']).toBe(50);
    expect(component['pauseTime']).toBe(2000);
  });

  it('should start typing effect on ngOnInit', () => {
    const spy = jest.spyOn(component as any, 'startTypingEffect');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should clear timeout on ngOnDestroy', () => {
    // Reset any previous spy
    jest.restoreAllMocks();

    const spy = jest.spyOn(global, 'clearTimeout');
    component['typedInstance'] = setTimeout(() => {}, 1000) as any;

    // Call ngOnDestroy method directly
    component.ngOnDestroy();

    expect(spy).toHaveBeenCalled();
  });

  it('should not try to clear timeout if it does not exist', () => {
    // Reset any previous spy
    jest.restoreAllMocks();

    const spy = jest.spyOn(global, 'clearTimeout');
    component['typedInstance'] = null;

    // Call ngOnDestroy method directly
    component.ngOnDestroy();

    expect(spy).not.toHaveBeenCalled();
  });

  describe('startTypingEffect', () => {
    beforeEach(() => {
      fixture.detectChanges(); // Ensure ViewChild is initialized
    });

    it('should add characters when not deleting', () => {
      component['currentText'] = 'Hell';
      component['currentIndex'] = 0;
      component['isDeleting'] = false;

      component['startTypingEffect']();

      expect(component['currentText']).toBe('Hello');
    });

    it('should remove characters when deleting', () => {
      component['currentText'] = 'Hello';
      component['currentIndex'] = 0;
      component['isDeleting'] = true;

      component['startTypingEffect']();

      expect(component['currentText']).toBe('Hell');
    });

    it('should switch to delete mode when complete text is reached', () => {
      component['currentText'] = 'Hello World !';
      component['currentIndex'] = 0;
      component['isDeleting'] = false;

      component['startTypingEffect']();

      expect(component['isDeleting']).toBe(true);
    });

    it('should advance to next text when completely deleted', () => {
      const initialIndex = component['currentIndex'];
      component['currentText'] = '';
      component['isDeleting'] = true;

      component['startTypingEffect']();

      expect(component['isDeleting']).toBe(false);
      expect(component['currentIndex']).toBe((initialIndex + 1) % component['typedTexts'].length);
    });

    it('should update element content', () => {
      component['currentText'] = 'Test';
      component['currentIndex'] = 0;
      component['isDeleting'] = false;

      const element = component['typedElement'].nativeElement;
      const initialContent = element.textContent;

      component['startTypingEffect']();

      expect(element.textContent).not.toBe(initialContent);
      expect(element.textContent).toBe(component['currentText']);
    });
  });
});
