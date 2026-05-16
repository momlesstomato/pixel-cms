# AGENTS.md

## Engineering Standards

This project is a TypeScript codebase. All source code must be typed explicitly enough for maintainability, reviewability, and safe refactoring. Avoid `any` unless there is a documented and justified interoperability boundary.

All code must be documented using TSDoc style. Components, hooks, utilities, exported types, and non-trivial internal logic should include concise documentation that explains intent, inputs, outputs, and meaningful constraints.

All code must pass the project linting rules before being considered complete. ESLint must enforce single quotes and no trailing semicolons.

## Tooling

Use `ripgrep` (`rg`) for text and file searches whenever it is available. It should be preferred over slower recursive search commands to keep codebase exploration and refactoring checks fast.

## Application Structure

The application follows a view-based routing pattern. App Router files should stay thin and should only render the corresponding view.

Preferred view structure:

```text
app/example/page.tsx
views/Example/Example.tsx
```

Route files should not contain feature implementation details. The view owns page composition, data orchestration, and configuration of reusable UI pieces.

Application-wide layout concerns must live under `src/layout`. `BaseLayout` owns server-rendered layout structure and non-client providers. `InsideLayout` owns client-capable providers and contexts that require or may require the `'use client'` boundary.

Shared configuration must live under `src/config` as typed TypeScript modules. Configuration shapes must live under `src/types`, with reusable exported types that document the structure expected by the config module.

## Internationalization

The project uses `next-intl` for translations. Spanish is the base language, so all base translation files and default message keys must be authored in Spanish first.

## Components And Hooks

Components and hooks must stay focused and reasonably small. Files must not exceed 300 lines. If a file grows beyond that limit, split it into smaller components, hooks, utilities, or configuration modules.

Use the smart/dumb component pattern:

- Smart components coordinate state, data loading, side effects, and feature behavior.
- Dumb components receive typed props and render predictable UI with minimal logic.

When a component has multiple render responsibilities, keep the smart wrapper at the component root and move dumb render pieces into a colocated `partial/` folder. Use focused partial folders for each render unit, for example:

```text
components/Header/Header.tsx
components/Header/partial/MegaMenu/MegaMenu.tsx
components/Header/partial/MegaMenuHeader/MegaMenuHeader.tsx
```

Components, hooks, and folders must use CamelCase-style names for React units, matching this structure:

```text
components/Button/Button.tsx
components/Button/Button.test.tsx
```

Every component must have unit tests. Tests should be colocated with the component and cover the behavior expected from its public props and user interactions.

Do not export anonymous default function declarations. Prefer a named constant followed by a default export:

```tsx
/**
 * Renders the primary button used across the application.
 */
const Button = () => {
  return null
}

export default Button
```

## Reusability

Code should be designed for reuse where it reduces duplication and improves consistency. Prefer configurable shared components over repeated feature-specific implementations.

For example, use a reusable list component with typed configuration and feature-specific addons for contacts, matches, rooms, and similar variants. Views should configure reusable components instead of creating a separate list implementation for each feature.

## Quality Bar

Before finishing any change:

- Ensure TypeScript types are correct.
- Ensure all new or changed code has TSDoc documentation.
- Ensure components are unit tested.
- Ensure linting passes.
- Ensure files remain under 300 lines.
- Ensure reusable behavior is implemented in shared components, hooks, or utilities when appropriate.
