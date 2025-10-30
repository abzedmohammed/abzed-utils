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

export const formatImgPath = (path) => {
	if (!path || typeof path === "object") return path;
	const domain = "102.217.125.162:2000";
	return path.startsWith("./")
		? `http://${domain}${path.replace("./", "/")}`
		: path;
};

export const formatTime = (timeString = "") => {
	if (!timeString) return "";
	if (timeString.split(":").length === 3) return timeString.slice(0, 5);
	return timeString;
};
