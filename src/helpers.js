export const generateKey = pre => `${pre}_${new Date().getTime()}`;
export const getSectionId = (index, title) => `${getSectionAffix(index)}-${toKebabCase(title)}`;
export const getSectionAffix = index => `${(index < 9) ? `0${index + 1}` : index + 1}`;
export const isClient = typeof window !== 'undefined';
export const toKebabCase = str => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}
