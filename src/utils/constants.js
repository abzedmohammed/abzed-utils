// src/constants.js
export const defaultDropdownOverlayStyle = {
    width: "fit-content",
    borderRadius: "1rem",
    background: "#FFF",
    boxShadow: "none",
};

export const transparentDropdownOverlayStyle = {
    width: "fit-content",
    borderRadius: "1rem",
    background: "transparent",
    boxShadow: "none",
    border: "none",
};

export const defaultInputStyle = ({ width = "100%", gap = ".625rem" }) => ({
    display: "flex",
    flexDirection: "column",
    width,
    gap,
});

/**
 * Minimum date of birth (18 years ago)
 */
const today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let yyyy = today.getFullYear() - 18;
export const minDateOfBirth = `${yyyy}-${mm}-${dd}`;
