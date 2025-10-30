import { useState } from 'react';

export const useToggle = (initVal) => {
	const [show, setshow] = useState(initVal);

	function toggle() {
		setshow(!show);
	}
	
	return { show, toggle };
}
