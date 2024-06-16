// 创建uid
export const createUID = () => {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'
    .replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 3) | 8;
      return v.toString(16);
    })
    .toUpperCase();
}

/**
 * 将字符串数字转成整型数字
 * @param {string} value
 * @returns {number}
 */
export const transformStringToNumber = (value: string): number => {
  return Number(value);
}

/**
 * 剔除px
 */
export const reducePX = (value: string | number | undefined): string => {
  if (!value) return '';
  const _value = String(value);
  return _value.replace('px', '');
}