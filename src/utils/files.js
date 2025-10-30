// src/files.js
import { onError } from "./notifications.js";

/**
 * Validate file before upload.
 * @param {string[]} allowedTypes
 * @param {number} sizeLimitMB
 */
export const createBeforeUpload = (allowedTypes = [], sizeLimitMB = 2) => {
	return (file) => {
		const isAllowedType = allowedTypes.includes(file.type);
		if (!isAllowedType) {
			onError(`Only allowed file types: ${allowedTypes.join(", ")}.`);
		}

		const isWithinSize = file.size / 1024 / 1024 < sizeLimitMB;
		if (!isWithinSize) {
			onError(`File must be smaller than ${sizeLimitMB}MB.`);
		}

		return isAllowedType && isWithinSize;
	};
};
