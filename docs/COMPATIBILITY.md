# Compatibility Matrix

`abzed-utils@2.x` expects the following host app versions:

| Package | Required Version |
| --- | --- |
| react | ^19.2.4 |
| react-dom | ^19.2.4 |
| antd | ^6.3.0 |
| @tanstack/react-query | ^5.90.21 |
| react-redux | ^9.2.0 |
| react-router-dom | ^7.13.0 |
| react-phone-number-input | ^3.4.14 |
| use-debounce | ^10.1.0 |

## Ownership Boundary

- Keep this package reusable and app-agnostic.
- Do not add app-specific auth, navigation redirects, or env-specific side effects.
