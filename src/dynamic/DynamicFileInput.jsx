import { Form, Upload } from 'antd';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextDynamic } from './TextDynamic';

export const DynamicFileInput = ({
	className,
	inputClassName,
	handleFileChange,
	onFileChange,
	label,
	beforeUpload,
	dynamicBody,
	children,
	uploadFile,
	onSuccess,
	onUploadSuccess,
	onError,
	onUploadError,
	accept = '*',
}) => {
	const dispatch = useDispatch();
	const [isLoading, setLoading] = useState(false);
	const resolvedOnFileChange = onFileChange ?? handleFileChange;
	const resolvedOnSuccess = onUploadSuccess ?? onSuccess;
	const resolvedOnError = onUploadError ?? onError;
	const resolvedBody = children ?? dynamicBody;

	const customUpload = async ({ file, onSuccess, onError }) => {
		if (typeof uploadFile !== 'function') {
			onError?.('uploadFile function is required');
			return;
		}

		setLoading(true);

		try {
			const res = await dispatch(uploadFile(file));

			if (res?.payload?.success) {
				const fileObj = {
					url: String(res?.payload?.targetUrl ?? ''),
					size: file?.size,
					name: file.name
				};

				onSuccess?.(fileObj);
			} else {
				onError?.('Upload failed');
			}
		} catch (err) {
			onError?.(err?.message || 'Upload failed');
		} finally {
			setLoading(false);
		}
	};

	return (
		<Form.Item label={label} className={className}>
			<div className='w-full h-full'>
				<Upload
					accept={accept}
					name='file'
					listType='picture-card'
					className={inputClassName}
					showUploadList={false}
					beforeUpload={beforeUpload}
					customRequest={(options) =>
						customUpload({
							...options,
							onSuccess: (res) => {
								resolvedOnFileChange?.(res);
								resolvedOnSuccess?.(
									`${options?.file?.name} file uploaded successfully.`
								);
							},
							onError: () =>
								resolvedOnError?.(
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
						resolvedBody
					)}
				</Upload>
			</div>
		</Form.Item>
	);
};

DynamicFileInput.propTypes = {
	className: PropTypes.string,
	inputClassName: PropTypes.string,
	handleFileChange: PropTypes.func,
	onFileChange: PropTypes.func,
	label: PropTypes.node,
	beforeUpload: PropTypes.func,
	dynamicBody: PropTypes.node,
	children: PropTypes.node,
	uploadFile: PropTypes.func,
	onSuccess: PropTypes.func,
	onUploadSuccess: PropTypes.func,
	onError: PropTypes.func,
	onUploadError: PropTypes.func,
	accept: PropTypes.string,
};
