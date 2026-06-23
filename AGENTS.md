# AGENTS.md

## Skill Trigger
- If a task involves React utilities/hooks/components or Ant Design abstraction, use the `abzed-utils-reference` skill.

## Source Of Truth
- Treat `C:/Users/ibraa/Documents/UTILS/abzed-utils` as the canonical reference implementation.
- Published package reference: `https://www.npmjs.com/package/abzed-utils` (current version: `2.5.0`).
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
- Peer ranges target the latest stable majors: React 19, AntD 6, TanStack Query 5, React Router 7.
- Run `npm install` and `npm run build` after dependency changes.

## Quality Gate
- Every change must keep `npm run check` green (`vitest run` then `vite build`).
- Add or update tests alongside any new feature, component, or logic (Vitest + React Testing Library).

## Delivery Expectations
- In implementation notes, state what existing `abzed-utils` export(s) were reused.
- If new functionality is added to the library, update `README.md` in the same change, bump the version in `package.json`, and rebuild `dist/`.
