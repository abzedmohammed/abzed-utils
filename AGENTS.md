# AGENTS.md

## Skill Trigger
- If a task involves React utilities/hooks/components or Ant Design abstraction, use the `abzed-utils-reference` skill.

## Source Of Truth
- Treat `C:/Users/ibraa/Documents/UTILS/abzed-utils` as the canonical reference implementation.
- Start by reading:
- `README.md`
- `package.json`
- `src/index.js`
- `src/utils/index.js`
- `src/hooks/index.js`
- `src/inputs/index.js`

## Reuse Policy
- Prefer existing exports from `abzed-utils` before writing custom helpers/components.
- If custom behavior is required, build a thin adapter around existing exports.
- Only add new utilities/components when a real API gap exists.

## Dependency Policy
- Keep React/AntD/query-related versions aligned with `abzed-utils` peer dependency ranges.
- Run `npm install` and `npm run build` after dependency changes.

## Delivery Expectations
- In implementation notes, state what existing `abzed-utils` export(s) were reused.
- If new functionality is added to the library, update `README.md` in the same change.
