// abzed-utils/src/notifications.js
export const onSuccess = (message, notifyFn) => {
    if (notifyFn) {
        notifyFn({ id: 1, message });
    } else {
        console.warn("✅", message);
    }
};

export const onError = (message, notifyFn) => {
    if (notifyFn) {
        notifyFn({ id: 2, message });
    } else {
        console.error("❌", message);
    }
};
