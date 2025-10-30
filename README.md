# 🧩 abzed-utils

A lightweight utility collection built for React and modern JavaScript projects.  
Created and maintained by **Abzed Mohammed**.

---

## 🚀 Installation

Install using **npm** or **yarn**:

```bash
npm install abzed-utils
# or
yarn add abzed-utils
```

---

## 📦 Usage

```javascript
import { formatMoney } from "abzed-utils";

const amount = 1234.56;
const formatted = formatMoney(amount, "KES");
console.log(formatted); // "KES 1,234.56"
```

---

### 📦 Available Functions

| Function                     | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| `formatPhone(phone)`         | Formats phone numbers with country code spacing              |
| `getStatusObj(status)`       | Returns an object containing color & text for a given status |
| `capitalizeWords(text)`      | Capitalizes each word in a string                            |
| `isValidEmail(email)`        | Checks if an email address is valid                          |
| `debounce(fn, delay)`        | Limits how often a function can run                          |
| `generateRandomId(prefix)`   | Creates a short, unique ID                                   |
| `truncateText(text, length)` | Shortens text and adds `...` if too long                     |

```

---

## 🧑‍💻 Author

**Abzed Mohammed (Abzedizo)**  
Software Developer • Backend & Frontend Engineer  

- 💼 [GitHub](https://github.com/abzedmohammed)  
- 💬 [LinkedIn](https://www.linkedin.com/in/abzed-mohammed-630bb181)  
- 🏍️ Proud Benelli 302S Rider  

```

---

## 📝 License

MIT License
