/* eslint-disable no-unused-vars */

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
