// src/formatters.js
export const formatMoney = (amount = 0, currency = "KES") =>
    new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency,
        minimumFractionDigits: 2,
    }).format(amount);

export const formatFileSize = (bytes = 0) => {
    if (bytes === 0) return "0 Bytes";
    const kb = 1024;
    const mb = kb * 1024;
    if (bytes >= mb) return `${(bytes / mb).toFixed(2)} MB`;
    if (bytes >= kb) return `${(bytes / kb).toFixed(2)} KB`;
    return `${bytes} B`;
};

export const formatFileName = (fileName = "") =>
    fileName ? fileName.split("_").pop() : "";

export const formatImgPath = (input) => {
    const path =
        typeof input === "object" && input !== null ? input.path : input;
    const domain =
        typeof input === "object" && input !== null ? input.domain : undefined;

    if (!path || typeof path === "object") return path;

    const normalizedPath = path.replace("./", "/");

    if (!path.startsWith("./")) return path;
    if (!domain) return normalizedPath;

    const normalizedDomain = String(domain).replace(/\/+$/, "");
    if (/^https?:\/\//i.test(normalizedDomain)) {
        return `${normalizedDomain}${normalizedPath}`;
    }

    const protocol =
        typeof window !== "undefined" ? window.location.protocol : "https:";

    return path.startsWith("./")
        ? `${protocol}//${normalizedDomain}${normalizedPath}`
        : path;
};

export const formatTime = (timeString = "") => {
    if (!timeString) return "";
    if (timeString.split(":").length === 3) return timeString.slice(0, 5);
    return timeString;
};

export const formatToLocalDateTime = (dayjsObj) => {
    if (!dayjsObj) return null;
    return dayjsObj.tz("Africa/Nairobi").format("YYYY-MM-DDTHH:mm:ss");
};

export const formatNumberAddComma = (num) => {
    if (num === null || num === undefined) return;
    return new Intl.NumberFormat("en-US").format(num);
};
