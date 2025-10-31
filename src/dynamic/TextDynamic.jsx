/* eslint-disable no-unused-vars */

export const TextDynamic = ({ className, tagName: Tag = 'span', text }) => {
  return <Tag className={className}>{text}</Tag>;
}
