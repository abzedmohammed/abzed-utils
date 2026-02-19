# abzed-utils

Reusable utilities, hooks, and Ant Design-based React UI primitives for faster frontend development.

## Installation

```bash
npm install abzed-utils
```

## Required Peer Dependencies

Install compatible versions in your app:

| Package | Version |
| --- | --- |
| react | `^19.2.4` |
| react-dom | `^19.2.4` |
| antd | `^6.3.0` |
| @tanstack/react-query | `^5.90.21` |
| react-redux | `^9.2.0` |
| react-router-dom | `^7.13.0` |
| react-phone-number-input | `^3.4.14` |
| use-debounce | `^10.1.0` |

## Quick Start

```jsx
import { formatMoney, FormInput, useDynamicMutation } from "abzed-utils";

console.log(formatMoney(1234.56, "KES"));
```

## Runtime Validation

`abzed-utils` now includes runtime prop validation with `prop-types` across exported UI wrappers, helping catch incorrect prop usage early during development.

## Exported Modules

`abzed-utils` exports:
- `utils/*`
- `hooks/*`
- `inputs/*`
- `form/*`
- `dropdown/*`
- `tables/*`
- `loaders/*`
- `modals/*`
- `dynamic/*`
- `queryClient`
- `statuses`

## Utilities Reference

### `config.js`
| Export | Description |
| --- | --- |
| `getEnv(key, fallback)` | Read env variables in Vite/Node safely. |
| `setLogo(value)` | Set in-memory logo value. |
| `getLogo()` | Get in-memory logo value. |
| `url` | `VITE_API_URL` shortcut. |
| `logoutUrl` | `VITE_LOGOUT_URL` shortcut. |
| `defaultTimer` | Parsed `VITE_DEFAULT_TIMER` value. |

### `constants.js`
| Export | Description |
| --- | --- |
| `defaultDropdownOverlayStyle` | Default dropdown overlay style object. |
| `transparentDropdownOverlayStyle` | Transparent overlay style object. |
| `defaultInputStyle({ width, gap })` | Shared flex column style helper for inputs. |
| `minDateOfBirth` | Date string representing 18 years ago from today. |

### `pagination.js`
| Export | Description |
| --- | --- |
| `pagination(config)` | Returns AntD-compatible pagination config with page/size/start handlers. |

### `formatters.js`
| Export | Description |
| --- | --- |
| `formatMoney(amount, currency)` | Currency formatting using `Intl.NumberFormat`. |
| `formatFileSize(bytes)` | Converts bytes to human-readable units. |
| `formatFileName(fileName)` | Returns suffix after underscore (`_`). |
| `formatImgPath(input)` | Supports `string` or `{ path, domain }`; resolves relative image paths. |
| `formatTime(timeString)` | Trims `HH:mm:ss` to `HH:mm` when needed. |
| `formatToLocalDateTime(dayjsObj)` | Formats a Day.js object to Nairobi timezone datetime string. |
| `formatNumberAddComma(num)` | Formats number with commas. |

### `validation.js`
| Export | Description |
| --- | --- |
| `validatePassword(password)` | Password rule validator, returns `true` or message. |
| `isValidCoordinate(value, system, type)` | Coordinate validator for supported systems (`WGS84`, `Arc 1960`). |

### `files.js`
| Export | Description |
| --- | --- |
| `createBeforeUpload(allowedTypes, sizeLimitMB, onValidationError?)` | Returns AntD Upload `beforeUpload` validator (`boolean`) and optional error callback. |

### `notifications.js`
| Export | Description |
| --- | --- |
| `onSuccess(message, notifyFn?)` | Success notifier helper with optional custom notifier. |
| `onError(message, notifyFn?)` | Error notifier helper with optional custom notifier. |

### `strings.js`
| Export | Description |
| --- | --- |
| `capitaliseFirstLetter(string)` | Capitalizes first character, lowercases rest. |
| `capitaliseAllFirstLetter(string)` | Capitalizes each word. |
| `uppercaseLetters(string)` | Uppercases text. |
| `removePlusFromPhone(phone)` | Removes leading `+` from phone string. |
| `formatPhone(phone)` | Converts `254...` to local `0...` format. |
| `getInitials(value)` | Builds initials from words. |
| `generateUniqueId()` | Timestamp/random numeric ID. |
| `getOrdinal(i)` | Returns ordinal suffix (`st`, `nd`, `rd`, `th`). |
| `splitAndJoinUnderscore(text)` | Replaces underscores with spaces. |

### `status.js`
| Export | Description |
| --- | --- |
| `getStatusObj(status)` | Returns status style/object from `statuses` with fallback. |

### `quill.js`
| Export | Description |
| --- | --- |
| `quillModules` | Default Quill toolbar config. |
| `quillFormats` | Allowed Quill format list. |

### `others.js`
| Export | Description |
| --- | --- |
| `handleMenuClick({ key, navigate, onClose })` | Handles route and external-link menu actions. |
| `removeEmptyChildren(data)` | Recursively removes empty `children` arrays. |
| `handleOpenChange(open, item, setState)` | Sets state when dropdown/modal opens. |

## Hooks Reference

| Hook | Description |
| --- | --- |
| `useAllCachedResults` | Collects list results from React Query cache by base key/path. |
| `useDynamicMutation` | Flexible mutation wrapper with invalidation, success/error extractors, navigation, dispatch. |
| `useFormModal` | Modal form orchestration (`Form.useForm`, submit, reset, mutation integration). |
| `useModalToggle` | Basic open/close modal state helper. |
| `useNetworkStatus` | Tracks online/offline browser state. |
| `usePaginatedQuery` | Pagination/search/query abstraction with debounced search. |
| `useSessionTimeout` | Activity timeout handler with auto logout + redirect. |
| `useToggle` | Generic boolean toggle state helper. |
| `useFetch` | GET fetch helper with token header, abort, and request-error callback. |
| `useFetchPost` | POST fetch helper with token header, abort, and request-error callback. |
| `usePrefersDarkMode` | Reads and subscribes to `prefers-color-scheme: dark`. |

### `useDynamicMutation` error callback compatibility

`useDynamicMutation` supports both patterns:

```js
onError(message, { variables, context, response, error })
```

```js
onError(message, variables, context, { variables, context, response, error })
```

## Input Components Reference

### Form-connected inputs
| Export | Description |
| --- | --- |
| `FormInput` | Standard AntD text input wrapped in `Form.Item`. |
| `FormInputCheckbox` | Checkbox field with `valuePropName="checked"`. |
| `FormInputDatePicker` | Date/time picker form field with picker/format controls. |
| `FormInputEmail` | Email-specific input field. |
| `FormInputNumber` | Number input field with formatter/parser support. |
| `FormInputPassword` | Password field with optional custom icon render behavior. |
| `FormInputPhone` | `react-phone-number-input` integrated into AntD form. |
| `FormInputRadioGroup` | Radio group field with controlled option support. |
| `FormInputSelect` | Searchable/selectable AntD `Select` form field. |
| `FormInputTextArea` | Multiline text area form field. |

### Non-form inputs
| Export | Description |
| --- | --- |
| `NormalInput` | Standalone text input with label and custom change signature. |
| `NormalInputDatePicker` | Standalone date/time picker input. |
| `NormalInputNumber` | Standalone number input with formatter/parser support. |
| `NormalInputRadioGroup` | Standalone radio group input. |
| `NormalInputSelect` | Standalone select input with optional async loading UI. |
| `NormalInputTextArea` | Standalone multiline text area input. |
| `NormalInputTimePicker` | Standalone time picker input. |
| `OTPInput` | OTP entry wrapper using AntD `Input.OTP`. |
| `SearchSelectInput` | Async searchable select with pluggable fetch/transform logic. |
| `MainSearch` | Simple reusable search input wrapper. |

## API Consistency And Compatibility Aliases

Preferred props are supported while legacy props still work to avoid breaking existing usage.

| Component | Preferred | Legacy (still supported) |
| --- | --- | --- |
| `DynamicBtn` | `onClick`, `loading`, `children` | `handleClick`, `isProcessing`, `text` |
| `DynamicDrawer` | `onClose`, `title`, `children`, `size` | `handleClose`, `drawerTitle`, `drawerBody`, `width` |
| `PrimaryModal` | `onClose`, `header`, `children` | `handleCancel`, `modalHeader`, `body` |
| `ActionModal` | `onClose`, `icon`, `header`, `actions` | `handleCloseModal`, `iconComponent`, `headerComponent`, `buttonComponent` |
| `DynamicFileInput` | `onFileChange`, `onUploadSuccess`, `onUploadError`, `children` | `handleFileChange`, `onSuccess`, `onError`, `dynamicBody` |
| `MainSearch` | `onSearchChange` | `handleSearchChange` |
| Normal/Form input wrappers | `onValueChange` | `onChange` |

### Select Wrapper Notes

- `showSearch` supports both `boolean` and object config.
- Search behavior props are aligned with modern AntD API by passing search settings through `showSearch` object.
- `mode="default"` is normalized internally for compatibility with AntD `Select`.

### SearchSelectInput Notes

- Added `debounceMs` prop (default `300`) for fetch debounce control.
- `mode` supports `default`, `multiple`, and `tags`.

## Form / Table / Dropdown / Modal / Dynamic Components

| Module | Export | Description |
| --- | --- | --- |
| form | `AntdForm` | Shared AntD form wrapper with vertical layout and hydrated initial values. |
| dropdown | `PrimaryDropdown` | Dropdown wrapper aligned to AntD `classNames/styles` with legacy overlay compatibility. |
| tables | `MainTable` | Responsive AntD table wrapper with optional scroll and row selection. |
| loaders | `CardSkeleton` | Skeleton block component. |
| modals | `PrimaryModal` | Base modal wrapper with standardized close/header/body aliases. |
| modals | `ActionModal` | Action-focused modal built on `PrimaryModal` with alias-safe props. |
| dynamic | `TextDynamic` | Dynamic text/tag renderer. |
| dynamic | `DynamicBtn` | Loading-capable button wrapper with standardized click/loading props. |
| dynamic | `EmptyState` | Empty state wrapper (`<Empty />`). |
| dynamic | `DynamicDrawer` | Drawer wrapper with customizable placement and size (`width` compatibility alias). |
| dynamic | `StatusBtn`, `Statusbtn` | Status text renderer (legacy and canonical names exported). |
| dynamic | `DynamicFileInput` | Upload UI wrapper with custom upload flow support. |

## Shared Exports

| Export | Description |
| --- | --- |
| `queryClient` | Preconfigured React Query `QueryClient` (`gcTime`, retry defaults, etc.). |
| `statuses` | Shared status catalog for status UI helpers. |

## Recent Updates Included

- `README` and metadata now match current public API.
- `queryClient` updated for React Query v5 (`gcTime`).
- `createBeforeUpload` now returns strict boolean for AntD Upload compatibility.
- `useDynamicMutation` keeps backward compatibility for legacy and extended `onError` callback styles.
- `usePrefersDarkMode` is now exported through root hooks exports.
- Deprecated AntD wrapper props were removed/migrated to current AntD API.
- Runtime `PropTypes` contracts were added across UI wrappers.
- Wrapper APIs were standardized with compatibility aliases (`onClose`, `onClick`, `loading`, `onValueChange`).
- Select wrappers now use modern search config patterns and normalized mode handling.

## Build

```bash
npm run build
```

## License

MIT
