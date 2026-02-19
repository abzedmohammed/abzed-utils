# abzed-utils

Reusable React utility helpers and Ant Design-focused UI building blocks.

## Installation

```bash
npm install abzed-utils
```

## Peer Dependencies

Install compatible versions of these packages in your app:

- react (`^18.3.1 || ^19.0.0`)
- react-dom (`^18.3.1 || ^19.0.0`)
- antd (`^5.27.0 || ^6.0.0`)
- @tanstack/react-query (`^5.81.2`)
- react-redux (`^9.2.0`)
- react-router-dom (`^7.13.0`)
- react-phone-number-input (`^3.4.14`)
- use-debounce (`^10.1.0`)

## Quick Start

```jsx
import { formatMoney, FormInput, useDynamicMutation } from "abzed-utils";

console.log(formatMoney(1234.56, "KES"));
```

## Main Export Groups

- `utils`: formatters, validation, status helpers, notifications, pagination, misc helpers
- `hooks`: query/mutation helpers, fetch hooks, modal/session/network utilities
- `inputs`: Ant Design form and non-form inputs
- `form`: form wrapper helpers
- `dropdown`: dropdown components
- `tables`: table components
- `loaders`: skeleton loaders
- `modals`: modal components
- `dynamic`: dynamic UI primitives
- shared: `queryClient`, `statuses`

## Build

```bash
npm run build
```

## License

MIT
