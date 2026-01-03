# JavaScript vs TypeScript Examples

## Running JavaScript

```bash
cd js
node index.js
```

## Running TypeScript

First, install TypeScript if you don't have it:
```bash
npm install -g typescript
```

Then compile and run:
```bash
cd ts

# Option 1: Compile with tsconfig.json (outputs to dist folder)
tsc
node dist/index.js

# Option 2: Quick compile (outputs to same folder)
tsc index.ts
node index.js
```

Or use ts-node for quick execution:
```bash
npm install -g ts-node

cd ts
ts-node index.ts
```

## Key Differences

**JavaScript:**
- No type annotations
- Variables can change types
- Errors caught at runtime

**TypeScript:**
- Explicit types (string, number, etc.)
- Type safety enforced
- Errors caught before running (compile time)
- Interfaces for object structures
