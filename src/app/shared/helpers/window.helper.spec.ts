import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { openInNewTab, WINDOW, WindowHelper } from './window.helper';
import { vi } from 'vitest';

describe('WindowHelper', () => {
  describe('openInNewTab (função standalone)', () => {
    it('deve abrir URL em nova aba', () => {
      const spy = vi.spyOn(window, 'open').mockImplementation(() => null);
      const url = 'https://example.com';

      openInNewTab(url);

      expect(spy).toHaveBeenCalledWith(url, '_blank');
      spy.mockRestore();
    });
  });

  describe('WINDOW token', () => {
    describe('na plataforma browser', () => {
      beforeEach(() => {
        TestBed.configureTestingModule({
          providers: [
            { provide: PLATFORM_ID, useValue: 'browser' }
          ]
        });
      });

      it('deve retornar o objeto window', () => {
        const windowToken = TestBed.inject(WINDOW);
        expect(windowToken).toBe(window);
      });
    });

    describe('na plataforma server', () => {
      beforeEach(() => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
          providers: [
            { provide: PLATFORM_ID, useValue: 'server' }
          ]
        });
      });

      it('deve retornar null', () => {
        const windowToken = TestBed.inject(WINDOW);
        expect(windowToken).toBeNull();
      });
    });
  });

  describe('WindowHelper (classe injetável)', () => {
    describe('na plataforma browser', () => {
      let windowHelper: WindowHelper;

      beforeEach(() => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
          providers: [
            WindowHelper,
            { provide: PLATFORM_ID, useValue: 'browser' }
          ]
        });
        windowHelper = TestBed.inject(WindowHelper);
      });

      it('deve abrir URL em nova aba', () => {
        const spy = vi.spyOn(window, 'open').mockImplementation(() => null);
        const url = 'https://example.com';

        windowHelper.openInNewTab(url);

        expect(spy).toHaveBeenCalledWith(url, '_blank');
        spy.mockRestore();
      });
    });

    describe('na plataforma server', () => {
      let windowHelper: WindowHelper;

      beforeEach(() => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
          providers: [
            WindowHelper,
            { provide: PLATFORM_ID, useValue: 'server' },
            { provide: WINDOW, useValue: null }
          ]
        });
        windowHelper = TestBed.inject(WindowHelper);
      });

      it('não deve chamar window.open quando window é null', () => {
        const spy = vi.spyOn(window, 'open').mockImplementation(() => null);

        // Não deve dar erro mesmo sem window
        windowHelper.openInNewTab('https://example.com');

        // Não deve ter chamado pois o WINDOW token é null
        expect(spy).not.toHaveBeenCalled();
        spy.mockRestore();
      });
    });
  });
});
