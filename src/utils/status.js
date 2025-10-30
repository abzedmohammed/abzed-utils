// src/status.js
import { statuses } from "../data.js";

export const getStatusObj = (status) => {
	const fallback = {
		status: "N/A",
		statusName: "N/A",
		background: "#D8CCF4",
		color: "#6226EF",
		dotColor: "#A46BF5",
	};

	return (
		statuses.find(
			(s) => s.status.toUpperCase() === status?.toUpperCase()
		) || fallback
	);
};
