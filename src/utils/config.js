// src/config.js

/**
 * Get environment variable safely (works with Vite and Node).
 * @param {string} key
 * @param {string} [fallback=""]
 * @returns {string}
 */

let _logo = null;

export const getEnv = (key, fallback = "") => {
	if (typeof import.meta !== "undefined" && import.meta.env)
		return import.meta.env[key] || fallback;
	return process?.env?.[key] || fallback;
};

export const setLogo = (value) => (_logo = value);
export const getLogo = () => _logo;

export const url = getEnv("VITE_API_URL");
export const logoutUrl = getEnv("VITE_LOGOUT_URL");
export const defaultTimer = parseInt(getEnv("VITE_DEFAULT_TIMER", "60"));
