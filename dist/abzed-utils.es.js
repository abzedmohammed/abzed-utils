const l = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 };
let d = null;
const s = (t, e = "") => typeof import.meta < "u" && l ? l[t] || e : process?.env?.[t] || e, h = (t) => d = t, F = () => d, E = s("VITE_API_URL"), A = s("VITE_LOGOUT_URL"), D = parseInt(s("VITE_DEFAULT_TIMER", "60")), S = {
  width: "fit-content",
  borderRadius: "1rem",
  background: "#FFF",
  boxShadow: "none"
}, w = {
  width: "fit-content",
  borderRadius: "1rem",
  background: "transparent",
  boxShadow: "none",
  border: "none"
}, a = /* @__PURE__ */ new Date();
let m = String(a.getDate()).padStart(2, "0"), g = String(a.getMonth() + 1).padStart(2, "0"), p = a.getFullYear() - 18;
const _ = `${p}-${g}-${m}`, P = ({
  currentPage: t,
  limit: e,
  total: r,
  setCurrentPage: o,
  setLimit: n,
  setStart: f
}) => ({
  hideOnSinglePage: !0,
  current: t,
  pageSize: e,
  total: r,
  showSizeChanger: !0,
  pageSizeOptions: [10, 20, 50, 100],
  onChange: (i, c) => {
    o(i), n(c), f((i - 1) * c), window.scrollTo(0, 0);
  }
}), U = (t = 0, e = "KES") => new Intl.NumberFormat("en-KE", {
  style: "currency",
  currency: e,
  minimumFractionDigits: 2
}).format(t), k = (t = 0) => {
  if (t === 0) return "0 Bytes";
  const e = 1024, r = e * 1024;
  return t >= r ? `${(t / r).toFixed(2)} MB` : t >= e ? `${(t / e).toFixed(2)} KB` : `${t} B`;
}, I = (t = "") => t ? t.split("_").pop() : "", T = (t) => !t || typeof t == "object" ? t : t.startsWith("./") ? `http://102.217.125.162:2000${t.replace("./", "/")}` : t, B = (t = "") => t ? t.split(":").length === 3 ? t.slice(0, 5) : t : "", N = (t = "") => t.length < 8 ? "Password must be at least 8 characters long." : /[A-Z]/.test(t) ? /\d/.test(t) ? /[!@#$%^&*()_+\-=[\]{};':\",./<>?`~]/.test(t) ? !0 : "Password must contain at least one special character (@$!%*?&)." : "Password must contain at least one number." : "Password must contain at least one uppercase letter.", O = (t, e, r) => {
  const o = parseFloat(t);
  if (isNaN(o) || (t?.toString().split(".")[1]?.length || 0) < 5) return !1;
  if (e === "WGS84") {
    if (r === "latitude")
      return o >= -4.7 && o <= 5.2;
    if (r === "longitude")
      return o >= 33.5 && o <= 42.1;
  }
  if (e === "Arc 1960") {
    if (r === "latitude")
      return o >= -4.7 && o <= 5.2;
    if (r === "longitude")
      return o >= 33.5 && o <= 42.1;
  }
  return !1;
}, L = (t, e) => {
  e ? e({ id: 1, message: t }) : console.log("✅", t);
}, u = (t, e) => {
  e ? e({ id: 3, message: t }) : console.error("❌", t);
}, $ = (t = [], e = 2) => (r) => {
  const o = t.includes(r.type);
  o || u(`Only allowed file types: ${t.join(", ")}.`);
  const n = r.size / 1024 / 1024 < e;
  return n || u(`File must be smaller than ${e}MB.`), o && n;
}, M = (t = "") => t ? t.charAt(0).toUpperCase() + t.slice(1).toLowerCase() : "", y = (t = "") => t.toLowerCase().split(" ").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), R = (t = "") => t.toUpperCase(), v = (t = "") => typeof t == "string" && t.startsWith("+") ? t.slice(1) : t, j = (t = "") => typeof t == "string" && t.startsWith("254") ? "0" + t.slice(3) : t, W = (t = "") => t.trim().split(/\s+/).map((e) => e[0]?.toUpperCase()).join(""), z = () => Date.now() + Math.floor(Math.random() * 1e3), V = (t) => {
  const e = t % 10, r = t % 100;
  return e === 1 && r !== 11 ? "st" : e === 2 && r !== 12 ? "nd" : e === 3 && r !== 13 ? "rd" : "th";
}, b = [
  {
    status: "ACTIVE",
    statusName: "Active",
    background: "#D8CCF4",
    color: "#6226EF",
    dotColor: "#A46BF5"
  },
  {
    status: "PENDING",
    statusName: "Pending",
    background: "#D8CCF4",
    color: "#6226EF",
    dotColor: "#A46BF5"
  },
  {
    status: "SUBMITTED",
    statusName: "Submited",
    background: "#D8CCF4",
    color: "#6226EF",
    dotColor: "#A46BF5"
  },
  {
    status: "COMPLETED",
    statusName: "Completed",
    background: "#ECFDF3",
    color: "#027A48",
    dotColor: "#12B76A"
  },
  {
    status: "REJECTED",
    statusName: "Rejected",
    background: "#F4CFCC",
    color: "#EF3826",
    dotColor: "#E63625"
  }
], q = (t) => {
  const e = {
    status: "N/A",
    statusName: "N/A",
    background: "#D8CCF4",
    color: "#6226EF",
    dotColor: "#A46BF5"
  };
  return b.find(
    (r) => r.status.toUpperCase() === t?.toUpperCase()
  ) || e;
}, x = {
  toolbar: [
    [{ size: ["small", !1, "large", "huge"] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    [
      {
        color: [
          "#000000",
          "#e60000",
          "#ff9900",
          "#ffff00",
          "#008a00",
          "#0066cc",
          "#9933ff",
          "#ffffff",
          "#facccc",
          "#ffebcc",
          "#ffffcc",
          "#cce8cc",
          "#cce0f5",
          "#ebd6ff",
          "#bbbbbb",
          "#f06666",
          "#ffc266",
          "#ffff66",
          "#66b966",
          "#66a3e0",
          "#c285ff",
          "#888888",
          "#a10000",
          "#b26b00",
          "#b2b200",
          "#006100",
          "#0047b2",
          "#6b24b2",
          "#444444",
          "#5c0000",
          "#663d00",
          "#666600",
          "#003700",
          "#002966",
          "#3d1466",
          "custom-color"
        ]
      }
    ]
  ]
}, G = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "color",
  "indent",
  "link",
  "image",
  "align",
  "size"
], K = ({ key: t, navigate: e, onClose: r }) => {
  t.startsWith("/") ? (e(t), r()) : t.startsWith("http") && (window.open(t, "_blank"), r());
}, C = (t = []) => t.map((e) => {
  const r = { ...e };
  return Array.isArray(r.children) && r.children.length === 0 ? delete r.children : Array.isArray(r.children) && (r.children = C(r.children)), r;
});
export {
  y as capitaliseAllFirstLetter,
  M as capitaliseFirstLetter,
  $ as createBeforeUpload,
  S as defaultDropdownOverlayStyle,
  D as defaultTimer,
  I as formatFileName,
  k as formatFileSize,
  T as formatImgPath,
  U as formatMoney,
  j as formatPhone,
  B as formatTime,
  z as generateUniqueId,
  s as getEnv,
  W as getInitials,
  F as getLogo,
  V as getOrdinal,
  q as getStatusObj,
  K as handleMenuClick,
  O as isValidCoordinate,
  A as logoutUrl,
  _ as minDateOfBirth,
  u as onError,
  L as onSuccess,
  P as pagination,
  G as quillFormats,
  x as quillModules,
  C as removeEmptyChildren,
  v as removePlusFromPhone,
  h as setLogo,
  w as transparentDropdownOverlayStyle,
  R as uppercaseLetters,
  E as url,
  N as validatePassword
};
