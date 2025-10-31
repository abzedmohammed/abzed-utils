import { Form, Upload } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextDynamic } from './TextDynamic';

export const DynamicFileInput = ({
	className,
	inputClassName,
	handleFileChange,
	label,
	beforeUpload,
	dynamicBody,
	uploadFile,
	onSuccess,
	onError,
}) => {
	const dispatch = useDispatch();
	const [isLoading, setLoading] = useState(false);

	const customUpload = async ({ file, onSuccess, onError }) => {
		try {
			await setLoading(true);

			const res = await dispatch(uploadFile(file));

			if (res?.payload?.success) {
				const fileObj = {
					url: String(res?.payload?.targetUrl ?? ''),
					size: file?.size,
					name: file.name
				}				

				onSuccess(fileObj);
				setLoading(false);
			} else {
				onError('Upload failed');
				setLoading(false);
			}
		} catch (err) {
			onError(err?.message);
			setLoading(false);
		}
	};

	return (
		<Form.Item label={label} className={className}>
			<div className='w-full h-full'>
				<Upload
					accept='*'
					name='file'
					listType='picture-card'
					className={inputClassName}
					showUploadList={false}
					beforeUpload={beforeUpload}
					customRequest={(options) =>
						customUpload({
							...options,
							onSuccess: (res) => {
								handleFileChange(res);
								onSuccess(
									`${options?.file?.name} file uploaded successfully.`
								);
							},
							onError: () =>
								onError(
									`${options?.file?.name} file upload failed.`
								),
						})
					}>
					{isLoading ? (
						<TextDynamic
							text={'Uploading...'}
							className={'txt_75 text-[#6B7280] animate-pulse'}
						/>
					) : (
						dynamicBody
					)}
				</Upload>
			</div>
		</Form.Item>
	);
}
