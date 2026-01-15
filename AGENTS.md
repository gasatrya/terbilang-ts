# Agent Guidelines for terbilang-ts

## Build & Test Commands

### Testing

```bash
# Run all tests in watch mode
npm test

# Run all tests once
vitest run

# Run single test by name pattern
vitest -t "should handle basic numbers"
vitest run -t "basic numbers"

# Run single test file
vitest src/terbilang.test.ts

# Run with coverage
vitest --coverage
```

### Build & Typecheck

```bash
# Build project (tsc + vite build)
npm run build

# Typecheck only (no emit)
npx tsc --noEmit
```

### Development

```bash
# Start dev server
npm run dev

# Preview production build
npm run preview
```

## Code Style Guidelines

### General

- **Quotes**: Single quotes for everything (`'string'`, `'./module'`)
- **Variables**: `const` by default, `let` only when reassignment needed
- **Functions**: Arrow functions preferred for most cases
- **Type Annotations**: Explicit types for function parameters and returns
- **Exports**: Named exports only (`export function name() {}`)
- **ESM**: Use ES modules syntax (no CommonJS)

### TypeScript Configuration

- `strict: true` enabled - all TypeScript strict mode rules apply
- `noUnusedLocals` and `noUnusedParameters` enabled - remove unused code
- `noFallthroughCasesInSwitch` enabled - explicit breaks in switch statements

### Naming Conventions

- **Functions/Variables**: camelCase (`terbilang`, `getScale`)
- **Constants**: UPPER_SNAKE_CASE for true constants, camelCase for const that may vary
- **Types/PascalCase**: PascalCase for types/interfaces (if needed)
- **Files**: kebab-case for source files (`terbilang.ts`), `.test.ts` suffix for test files

### Error Handling

- Throw `Error` objects with descriptive messages
- Validate inputs early with explicit checks
- Return empty string for edge cases like NaN/Infinity (when appropriate)
- Use try/catch in test files to verify error throwing

### Code Organization

- Early returns preferred over nested if/else
- Related helper arrays defined at top of functions
- Array destructuring for multiple assignments (`const [a, b] = [...]`)
- Template literals for string interpolation
- Logical grouping with blank lines between sections

### Testing Conventions

- Use `describe` blocks for test grouping
- Descriptive test names: "should [action] [context]"
- Group related tests with inline comments
- Test edge cases: zero, negatives, invalid inputs
- Use `toThrow()` for error validation
- Test files co-located with source files (`file.test.ts`)

### Imports

- Relative imports with `./` prefix
- No external library dependencies beyond devDependencies
- Import what you use from test utilities: `import { describe, it, expect } from 'vitest'`

### Formatting

- No auto-formatter configured - follow existing style
- Consistent indentation (2 spaces)
- Spaces around operators and after commas
- No trailing whitespace
- Blank line at end of files

## Quality Gates

Before marking work complete:

1. Run `npm run build` - TypeScript must compile without errors
2. Run `npm test` - All tests must pass
3. Run `npx tsc --noEmit` - No type errors
4. Manual review of code changes against style guidelines
