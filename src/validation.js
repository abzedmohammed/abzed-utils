export const validatePassword = (password = "") => {
  if (password.length < 8) return "Password must be at least 8 characters long.";
  if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter.";
  if (!/\d/.test(password)) return "Password must contain at least one number.";
  if (!/[!@#$%^&*()_+\-=[\]{};':\",./<>?`~]/.test(password))
    return "Password must contain at least one special character (@$!%*?&).";
  return true;
};

export const isValidCoordinate = (value, system, type) => {
	const parsed = parseFloat(value);

	if (isNaN(parsed)) return false;

	const decimalPlaces = value?.toString().split('.')[1]?.length || 0;

	if (decimalPlaces < 5) return false;

	if (system === 'WGS84') {
		if (type === 'latitude') {
			return parsed >= -4.7 && parsed <= 5.2;
		}
		if (type === 'longitude') {
			return parsed >= 33.5 && parsed <= 42.1;
		}
	}

	if (system === 'Arc 1960') {
		if (type === 'latitude') {
			return parsed >= -4.7 && parsed <= 5.2;
		}
		if (type === 'longitude') {
			return parsed >= 33.5 && parsed <= 42.1;
		}
	}

	return false;
};