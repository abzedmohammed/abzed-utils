export const handleMenuClick = ({ key, navigate, onClose }) => {
	if (key.startsWith('/')) {
		navigate(key);
		onClose();
	} else if (key.startsWith('http')) {
		window.open(key, '_blank');
		onClose();
	}
};

export const removeEmptyChildren = (data = []) => {
	return data.map((item) => {
		const cleanedItem = { ...item };
		if (
			Array.isArray(cleanedItem.children) &&
			cleanedItem.children.length === 0
		) {
			delete cleanedItem.children;
		} else if (Array.isArray(cleanedItem.children)) {
			cleanedItem.children = removeEmptyChildren(cleanedItem.children);
		}
		return cleanedItem;
	});
};

export const handleOpenChange = (open, item, setState) => {
    if (open) {
        setState(item);
    }
};