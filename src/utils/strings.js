// src/strings.js
export const capitaliseFirstLetter = (string = "") =>
    string
        ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
        : "";

export const capitaliseAllFirstLetter = (string = "") =>
    string
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

export const uppercaseLetters = (string = "") => string.toUpperCase();

export const removePlusFromPhone = (phone = "") =>
    typeof phone === "string" && phone.startsWith("+") ? phone.slice(1) : phone;

export const formatPhone = (phone = "") =>
    typeof phone === "string" && phone.startsWith("254")
        ? "0" + phone.slice(3)
        : phone;

export const getInitials = (value = "") =>
    value
        .trim()
        .split(/\s+/)
        .map((word) => word[0]?.toUpperCase())
        .join("");

export const generateUniqueId = () =>
    Date.now() + Math.floor(Math.random() * 1000);

export const getOrdinal = (i) => {
    const j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) return "st";
    if (j === 2 && k !== 12) return "nd";
    if (j === 3 && k !== 13) return "rd";
    return "th";
};

export const splitAndJoinUnderscore = (text) => text?.split("_").join(" ");
