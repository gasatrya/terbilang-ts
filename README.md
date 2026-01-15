# Terbilang TS

A TypeScript helper for converting numbers to Indonesian words with proper validation and error handling. Inspired by [terbilang-js](https://github.com/BosNaufal/terbilang-js) by Naufal Rabbani.

## Features

- Converts integers to Indonesian words (Nol to Kuadriliun)
- Supports negative numbers (with "Negatif" prefix)
- Zero returns "Nol" instead of empty string
- Input validation for non-integer values
- Range validation (up to 999 Kuadriliun / 10^18 - 1)
- Handles edge cases (NaN, Infinity)
- Type-safe TypeScript implementation

## Installation

Copy the [terbilang.ts](https://github.com/gasatrya/terbilang-ts/blob/main/src/terbilang.ts) file to your project:

```bash
# Or add as a dependency (when published)
npm install terbilang-ts
```

## Usage

```typescript
import { terbilang } from './terbilang'

// Basic numbers
terbilang(0) // "Nol"
terbilang(1) // "Satu"
terbilang(10) // "Sepuluh"
terbilang(100) // "Seratus"
terbilang(1000) // "Seribu"
terbilang(10000) // "Sepuluh Ribu"

// Larger numbers
terbilang(1234567) // "Satu Juta Dua Ratus Tiga Puluh Empat Ribu Lima Ratus Enam Puluh Tujuh"
terbilang(1000000000) // "Satu Milyar"

// Negative numbers
terbilang(-5) // "Negatif Lima"
terbilang(-100) // "Negatif Seratus"
```

## API

### `terbilang(num: number): string`

Converts a number to its Indonesian word representation.

**Parameters:**

- `num` - The number to convert. Must be an integer.

**Returns:**

- Indonesian word representation of the number

**Throws:**

- `Error` - If the input is not an integer
- `Error` - If the number exceeds the supported range (≥ 10^18)

**Edge Cases:**

- `terbilang(NaN)` → `""`
- `terbilang(Infinity)` → `""`
- `terbilang(0)` → `"Nol"`

## Supported Range

The function supports integers from `-999999999999999999` to `999999999999999999` (999 Kuadriliun).

Numbers outside this range will throw an error:

```typescript
terbilang(10 ** 18) // throws Error
```

## Error Handling

```typescript
// Non-integer numbers
try {
  terbilang(123.45)
} catch (e) {
  console.error(e.message) // "terbilang only accepts integer numbers"
}

// Numbers beyond supported range
try {
  terbilang(10 ** 18)
} catch (e) {
  console.error(e.message) // "terbilang only supports numbers up to 999 Kuadriliun"
}
```

## Testing

```bash
npm test
```

## License

MIT
