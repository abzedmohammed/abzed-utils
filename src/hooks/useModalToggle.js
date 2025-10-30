import { useState } from 'react';

export const useModalToggle = () => {
	const [open, setopen] = useState(false);

	const handleOpen = () => setopen(true);

	const handleCancel = () => setopen(false);

	return { handleOpen, handleCancel, open };
}
