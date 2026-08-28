import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageHeaderComponent } from './page-header.component';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { TYPE_SPEED_MS, DELETE_SPEED_MS, TYPING_PAUSE_MS } from '../../shared/constants';

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
    vi.clearAllMocks();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have array of texts for typing as signal', () => {
    expect(component['typedTexts']).toBeDefined();
    expect(Array.isArray(component['typedTexts']())).toBe(true);
    expect(component['typedTexts']().length).toBeGreaterThan(0);
  });

  it('should have "Hello World !" as initial text', () => {
    expect(component['typedTexts']()).toContain('Hello World !');
  });

  it('should initialize with index 0 as signal', () => {
    expect(component['currentIndex']()).toBe(0);
  });

  it('should initialize with empty text as signal', () => {
    expect(component['currentText']()).toBe('');
  });

  it('should initialize with isDeleting false as signal', () => {
    expect(component['isDeleting']()).toBe(false);
  });

  it('should use timing constants from shared constants', () => {
    expect(TYPE_SPEED_MS).toBe(100);
    expect(DELETE_SPEED_MS).toBe(50);
    expect(TYPING_PAUSE_MS).toBe(2000);
  });

  it('should clear timeout on destroy via destroyRef', () => {
    vi.restoreAllMocks();

    const spy = vi.spyOn(globalThis, 'clearTimeout');
    component['typedInstance'] = setTimeout(() => {}, 1000);

    fixture.destroy();

    expect(spy).toHaveBeenCalled();
  });

  it('should not try to clear timeout if it does not exist', () => {
    vi.restoreAllMocks();

    const spy = vi.spyOn(globalThis, 'clearTimeout');
    component['typedInstance'] = null;

    fixture.destroy();

    expect(spy).not.toHaveBeenCalled();
  });

  describe('startTypingEffect', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should add characters when not deleting', () => {
      component['currentText'].set('Hell');
      component['currentIndex'].set(0);
      component['isDeleting'].set(false);

      component['startTypingEffect']();

      expect(component['currentText']()).toBe('Hello');
    });

    it('should remove characters when deleting', () => {
      component['currentText'].set('Hello');
      component['currentIndex'].set(0);
      component['isDeleting'].set(true);

      component['startTypingEffect']();

      expect(component['currentText']()).toBe('Hell');
    });

    it('should switch to delete mode when complete text is reached', () => {
      component['currentText'].set('Hello World !');
      component['currentIndex'].set(0);
      component['isDeleting'].set(false);

      component['startTypingEffect']();

      expect(component['isDeleting']()).toBe(true);
    });

    it('should advance to next text when completely deleted', () => {
      const initialIndex = component['currentIndex']();
      component['currentText'].set('');
      component['isDeleting'].set(true);

      component['startTypingEffect']();

      expect(component['isDeleting']()).toBe(false);
      expect(component['currentIndex']()).toBe((initialIndex + 1) % component['typedTexts']().length);
    });

    it('should update element content', () => {
      component['currentText'].set('Test');
      component['currentIndex'].set(0);
      component['isDeleting'].set(false);

      const element = component['typedElement']().nativeElement;
      const initialContent = element.textContent;

      component['startTypingEffect']();

      expect(element.textContent).not.toBe(initialContent);
      expect(element.textContent).toBe(component['currentText']());
    });
  });
});
