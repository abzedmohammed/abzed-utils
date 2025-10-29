// @ts-check

/**
 * @typedef {Object} AbzedUtilsConfig
 * @property {string} [apiUrl]
 * @property {string} [logoutUrl]
 * @property {number} [defaultTimer]
 * @property {string} [logo]
 */

/** @type {AbzedUtilsConfig} */
let config = {};

/**
 * Initialize or update global config.
 * @param {AbzedUtilsConfig} options
 */
export const initUtils = (options = {}) => {
  config = { ...config, ...options };
};

/**
 * Retrieve the current config.
 * @returns {AbzedUtilsConfig}
 */
export const getConfig = () => config;
