// @ts-check
import React from "react";

import { getConfig } from "./config.js";

/**
 * Format relative image path to a full HTTP path using configured domain.
 * @param {string | object | null | undefined} path
 * @returns {string | object | null | undefined}
 */
export const formatImgPath = (path) => {
  if (!path || typeof path === "object") return path;

  const domain = getConfig().apiUrl || "http://localhost:3000";
  return path.startsWith("./")
    ? `${domain}${path.replace("./", "/")}`
    : path;
};

/**
 * Remove the leading '+' from a phone number.
 * @param {string} [phone=""]
 * @returns {string}
 */
export const removePlusFromPhone = (phone = "") =>
  typeof phone === "string" && phone.startsWith("+")
    ? phone.slice(1)
    : phone;

/**
 * Convert phone number from '254...' to '0...'
 * @param {string} [phone=""]
 * @returns {string}
 */
export const formatPhone = (phone = "") =>
  typeof phone === "string" && phone.startsWith("254")
    ? "0" + phone.slice(3)
    : phone;
