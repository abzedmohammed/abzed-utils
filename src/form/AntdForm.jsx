import { Form } from 'antd';
import { useEffect, useRef } from 'react';

export const AntdForm = ({
	handleSubmit,
	children,
	formName,
	form,
	initialValues,
	disabled,
}) => {

	const formRef = useRef(null);

	const onFinish = async (data) => handleSubmit(data, form);

	useEffect(() => {
		form.setFieldsValue(initialValues);
	}, [initialValues, form]);

	return (
		<>
			<Form
				disabled={disabled}
				scrollToFirstError
				layout='vertical'
				ref={formRef}
				name={formName}
				onFinish={onFinish}
				style={{
					maxWidth: '100%',
					width: '100%',
				}}
				initialValues={{ initialValues }}
				form={form}>
				{children}
			</Form>
		</>
	);
}
