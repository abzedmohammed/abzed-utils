import { useEffect, useState } from "react";

export const usePrefersDarkMode = () => {
    const getInitial = () =>
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    const [isDark, setIsDark] = useState(getInitial);

    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) {
            return undefined;
        }

        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = (e) => setIsDark(e.matches);

        if (mq.addEventListener) mq.addEventListener("change", handler);
        else mq.addListener(handler);

        return () => {
            if (mq.removeEventListener) mq.removeEventListener("change", handler);
            else mq.removeListener(handler);
        };
    }, []);

    return isDark;
};

export default usePrefersDarkMode;
