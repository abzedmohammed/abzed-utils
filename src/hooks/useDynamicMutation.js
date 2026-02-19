import { useDispatch } from "react-redux";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const getByPath = (obj, path = []) =>
    path.reduce((acc, key) => acc?.[key], obj);

export const useDynamicMutation = ({
    mutationFn,
    onSuccess,
    onError,
    invalidateQueryKeys = [],
    meta = {},
    redirectTo,
    extractResponse = (data) => getByPath(data, ["data"]),
    isResponseSuccess = (response) => getByPath(response, ["success"]),
    extractResponseMessage = (response) => getByPath(response, ["message"]),
    extractBackendErrorMessage = (error) =>
        getByPath(error, ["response", "data", "message"]),
}) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const invokeOnError = (message, variables, context, extras = {}) => {
        if (!onError) return;

        const payload = { variables, context, ...extras };

        if (onError.length <= 2) {
            onError(message, payload);
            return;
        }

        onError(message, variables, context, payload);
    };

    return useMutation({
        mutationFn,
        onSuccess: async (data, variables, context) => {
            await Promise.all(
                invalidateQueryKeys.map((key) =>
                    queryClient.invalidateQueries({
                        queryKey: Array.isArray(key) ? key : [key],
                    }),
                ),
            );

            const response = extractResponse(data);
            if (isResponseSuccess(response)) {
                const form = variables?.form;

                await onSuccess?.({
                    response,
                    dispatch,
                    navigate,
                    variables,
                    form,
                });

                if (redirectTo) {
                    navigate(redirectTo);
                }
            } else {
                const message =
                    extractResponseMessage(response) || "An error occurred";
                invokeOnError(message, variables, context, { response });
            }
        },
        onError: (error, variables, context) => {
            const backendMessage = extractBackendErrorMessage(error);
            const message =
                backendMessage ||
                error?.message ||
                "An unexpected error occurred";

            invokeOnError(message, variables, context, { error });
        },
        meta,
    });
};
