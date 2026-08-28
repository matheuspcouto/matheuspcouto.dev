import type { UserConfig } from "@commitlint/types";

/**
 * Configuração do Commitlint para validação de mensagens de commit.
 * Estende o padrão Conventional Commits e restringe os types permitidos.
 *
 * Formato esperado: type(scope?): subject
 * Exemplo: feat(auth): adicionar login com Google
 *
 * Executado automaticamente via hook .husky/commit-msg a cada git commit.
 *
 * @see https://commitlint.js.org/reference/configuration.html
 */
const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Types permitidos seguindo Conventional Commits
    "type-enum": [
      2, // error
      "always",
      [
        "feat",     // Nova funcionalidade
        "fix",      // Correção de bug
        "docs",     // Apenas documentação
        "style",    // Formatação (sem mudança de código)
        "refactor", // Refatoração (sem mudança de comportamento)
        "perf",     // Melhoria de performance
        "test",     // Adição/correção de testes
        "build",    // Build system ou dependências externas
        "ci",       // Configuração de CI/CD
        "chore",    // Outras tarefas (não afetam src/test)
        "revert",   // Reverter commit anterior
      ],
    ],
    // Subject não pode iniciar com maiúscula (exceto nomes próprios)
    "subject-case": [2, "never", ["start-case", "pascal-case", "upper-case"]],
    // Subject obrigatório
    "subject-empty": [2, "never"],
    // Type obrigatório
    "type-empty": [2, "never"],
  },
};

export default config;
