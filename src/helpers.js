export const generateKey = pre => `${pre}_${new Date().getTime()}`;
export const getSectionId = index => `section-${index}`;
export const getSectionAffix = index => `${(index < 9) ? `0${index + 1}` : index + 1}`;
export const isClient = typeof window !== 'undefined';
