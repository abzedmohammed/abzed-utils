import { useEffect, useState } from "react";

export const useFetch = ({ url, dependency, onRequestError }) => {
    const token = localStorage.getItem("token");

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const headers = {
                    "Content-Type": "application/json",
                };

                if (token) {
                    headers.Authorization = `Bearer ${token}`;
                }

                const res = await fetch(url, {
                    method: "GET",
                    headers,
                    credentials: "include",
                });

                if (!res.ok) {
                    if ([401, 403, 400].includes(res.status)) {
                        onRequestError()
                    }
                    setIsError("Request failed");
                    setIsLoading(false);
                    return;
                }

                const response = await res.json();
                setData(response?.data?.result || []);
                setIsError("");
            } catch (error) {
                setIsError(error.message || "An error occurred");
            }

            setIsLoading(false);
        };

        fetchData();
    }, [url, dependency, token]);

    return { isLoading, isError, data };
};
