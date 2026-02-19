/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

export const TextDynamic = ({
    className,
    tagName: Tag = "span",
    text,
    color,
}) => {
    return (
        <Tag style={{ color }} className={className}>
            {text}
        </Tag>
    );
};

TextDynamic.propTypes = {
    className: PropTypes.string,
    tagName: PropTypes.elementType,
    text: PropTypes.node,
    color: PropTypes.string,
};
