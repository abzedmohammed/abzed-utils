import { useDispatch } from 'react-redux';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useDynamicMutation = ({
	mutationFn,
	onSuccess,
	onError,
	invalidateQueryKeys = [],
	meta = {},
	redirectTo,
}) => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return useMutation({
		mutationFn,
		onSuccess: async (data, variables, context) => {
			await Promise.all(
				invalidateQueryKeys.map((key) =>
					queryClient.invalidateQueries({ queryKey: key })
				)
			);

			if (data?.data?.success) {
				const response = data?.data;
				const { form } = variables;

				await onSuccess?.({ response, dispatch, navigate, variables, form });

				if (redirectTo) {
					await navigate(redirectTo);
				}
			} else {
				const message = data?.data?.message || 'An error occurred';
				if (onError) {
					onError(message, {variables, context });
				}
			}
		},
		onError: (error, variables, context) => {
			const message = error?.message || 'An unexpected error occurred';
			if (onError) {
				onError(message, {variables, context });
			}
		},
		meta,
	});
};
