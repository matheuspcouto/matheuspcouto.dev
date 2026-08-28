/**
 * Configuração do ESLint (Flat Config) para Angular.
 * Combina regras de qualidade de código com plugins de segurança.
 *
 * @author Matheus Pimentel Do Couto
 */
import angular from 'angular-eslint';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import security from 'eslint-plugin-security';
import noSecrets from 'eslint-plugin-no-secrets';
import globals from 'globals';

export default tseslint.config(
  // ── Arquivos ignorados ─────────────────────────────────────────────────────
  {
    ignores: ['dist/**', 'coverage/**', 'node_modules/**', '.angular/**'],
  },

  // ── Base: ESLint + TypeScript recomendados ─────────────────────────────────
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // ── Regras para arquivos TypeScript ────────────────────────────────────────
  {
    files: ['**/*.ts'],
    extends: [...angular.configs.tsRecommended],
    processor: angular.processInlineTemplates,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.vitest,
      },
    },
    plugins: {
      security,
      'no-secrets': noSecrets,
    },
    rules: {
      // ── Angular: Seletores ─────────────────────────────────────────────────
      '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'app', style: 'camelCase' }],
      '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }],

      // ── TypeScript: Tipagem ────────────────────────────────────────────────
      // Permite _variável para ignorar parâmetros não usados
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      // any é proibido — força tipagem explícita
      '@typescript-eslint/no-explicit-any': 'error',
      // Permite require() em casos específicos (CommonJS legado)
      '@typescript-eslint/no-require-imports': 'off',
      // @ts-ignore só com justificativa obrigatória
      '@typescript-eslint/ban-ts-comment': ['error', {
        'ts-ignore': 'allow-with-description',
        'ts-expect-error': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        minimumDescriptionLength: 10,
      }],

      // ── Qualidade de código ────────────────────────────────────────────────
      // Permite console.error e console.warn (erros reais), bloqueia console.log/info/debug
      'no-console': ['error', { allow: ['error', 'warn'] }],
      // Força === ao invés de == (evita coerção implícita)
      'eqeqeq': ['error', 'always'],

      // ── Segurança ──────────────────────────────────────────────────────────
      // Bloqueia eval() com expressões dinâmicas
      'security/detect-eval-with-expression': 'error',
      // Alerta sobre RegExp com input dinâmico (ReDoS)
      'security/detect-non-literal-regexp': 'warn',
      // Alerta sobre comparações que podem vazar timing
      'security/detect-possible-timing-attacks': 'warn',
      // Desativado: muitos falsos positivos em TS (chaves de enum/const, não user input)
      'security/detect-object-injection': 'off',
      // Desativado: muitos falsos positivos com RegExp válidas
      'security/detect-unsafe-regex': 'off',
      // Detecta secrets hardcoded (tolerance ajustada para reduzir falsos positivos)
      'no-secrets/no-secrets': ['error', { tolerance: 4.5 }],
    },
  },

  // ── Regras para templates HTML ─────────────────────────────────────────────
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
  },

  // ── Regras relaxadas para testes ───────────────────────────────────────────
  {
    files: ['**/*.spec.ts'],
    rules: {
      // Secrets em testes são mocks/fixtures
      'no-secrets/no-secrets': 'off',
      // any é comum em mocks
      '@typescript-eslint/no-explicit-any': 'off',
      // Testes podem usar console para debug
      'no-console': 'off',
    },
  },

  // ── Regras relaxadas para environments ─────────────────────────────────────
  {
    files: ['**/environments/**/*.ts'],
    rules: {
      'no-secrets/no-secrets': 'off',
    },
  },
);
