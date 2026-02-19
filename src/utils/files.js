/**
 * Validate file before upload.
 * @param {string[]} allowedTypes
 * @param {number} sizeLimitMB
 * @param {(message: string, file: File) => void} [onValidationError]
 */
export const createBeforeUpload = (
    allowedTypes = [],
    sizeLimitMB = 2,
    onValidationError,
) => {
    return (file) => {
        const hasTypeRestrictions =
            Array.isArray(allowedTypes) && allowedTypes.length > 0;
        const isAllowedType = hasTypeRestrictions
            ? allowedTypes.includes(file.type)
            : true;

        if (!isAllowedType) {
            const message = `Only allowed file types: ${allowedTypes.join(
                ", ",
            )}.`;
            onValidationError?.(message, file);
            return false;
        }

        const isWithinSize = file.size / 1024 / 1024 <= sizeLimitMB;
        if (!isWithinSize) {
            const message = `File must be smaller than or equal to ${sizeLimitMB}MB.`;
            onValidationError?.(message, file);
            return false;
        }

        return true;
    };
};
