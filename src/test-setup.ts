import { setupTestBed } from '@analogjs/vitest-angular/setup-testbed';

// Mock window.matchMedia (required in jsdom environment)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

setupTestBed({ zoneless: true });
