import { useEffect, useRef, useState } from "react";

const getByPath = (obj, path = []) =>
    path.reduce((acc, key) => acc?.[key], obj);

export const useFetch = ({
    url,
    dependency,
    onRequestError,
    extractData = (response) => getByPath(response, ["data", "result"]),
    extractErrorMessage = (response) => getByPath(response, ["message"]),
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState("");
    const [data, setData] = useState([]);
    const onRequestErrorRef = useRef(onRequestError);

    useEffect(() => {
        onRequestErrorRef.current = onRequestError;
    }, [onRequestError]);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const token = localStorage.getItem("token");
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
                    signal: controller.signal,
                });

                if (!res.ok) {
                    if ([401, 403, 400].includes(res.status)) {
                        onRequestErrorRef.current?.();
                    }
                    if (isMounted) {
                        let errorBody = null;
                        try {
                            errorBody = await res.json();
                        } catch {
                            errorBody = null;
                        }
                        setIsError(
                            extractErrorMessage(errorBody) || "Request failed",
                        );
                    }
                    return;
                }

                const response = await res.json();
                if (isMounted) {
                    setData(extractData(response) ?? []);
                    setIsError("");
                }
            } catch (error) {
                if (error?.name !== "AbortError" && isMounted) {
                    setIsError(error.message || "An error occurred");
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, [url, dependency]);

    return { isLoading, isError, data };
};
