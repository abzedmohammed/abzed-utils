import { useCallback, useEffect } from 'react';
import { useDynamicMutation } from './useDynamicMutation';
import { Form } from 'antd';

/**
 * Custom hook for managing form modals with consistent behavior
 * @param {Object} config - Configuration object
 * @param {Function} config.mutation - Mutation configuration object with mutationFn
 * @param {Array} config.invalidateKeys - Query keys to invalidate on success
 * @param {Function} config.onSuccess - Success callback
 * @param {Function} config.onError - Error callback
 * @param {Function} config.onClose - Close modal callback
 * @param {Boolean} config.open - Modal open state
 * @param {Object} config.initialValues - Initial form values
 * @param {Function} config.transformValues - Optional function to transform values before mutation
 * @returns {Object} - Form instance, handlers, and mutation state
 */
export const useFormModal = ({
	mutation,
	invalidateKeys = [],
	onSuccess,
	onError,
	onClose,
	open,
	initialValues = {},
	transformValues,
}) => {
	const [form] = Form.useForm();

	const handleClose = useCallback(() => {
		onClose();
		form.resetFields();
	}, [form, onClose]);

	const saveMutation = useDynamicMutation({
		mutationFn: mutation?.mutationFn,
		redirectTo: null,
		onError,
		invalidateQueryKeys: invalidateKeys,
		onSuccess: ({ response }) => {
			if (onSuccess) {
				onSuccess(response);
			}
			handleClose();
		},
	});

	const handleSubmit = useCallback(
		(values) => {
			const finalValues = transformValues ? transformValues(values) : values;
			saveMutation.mutate(finalValues);
		},
		[saveMutation, transformValues]
	);

	useEffect(() => {
		if (open && initialValues) {
			form.setFieldsValue(initialValues);
		}
	}, [open, initialValues, form]);

	return {
		form,
		handleClose,
		handleSubmit,
		saveMutation,
		isPending: saveMutation.isPending,
	};
};
