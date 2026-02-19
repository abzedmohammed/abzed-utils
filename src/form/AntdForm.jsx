import { Form } from 'antd';
import { useEffect } from 'react';

export const AntdForm = ({
	handleSubmit,
	children,
	formName,
	form,
	initialValues = {},
	disabled,
}) => {
	const onFinish = async (data) => handleSubmit(data, form);

	useEffect(() => {
		form.setFieldsValue(initialValues);
	}, [form, initialValues]);

	return (
		<Form
			disabled={disabled}
			scrollToFirstError
			layout='vertical'
			name={formName}
			onFinish={onFinish}
			style={{
				maxWidth: '100%',
				width: '100%',
			}}
			initialValues={initialValues}
			form={form}>
			{children}
		</Form>
	);
};
