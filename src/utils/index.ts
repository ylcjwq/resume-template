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

/**
 * 数组对象根据指定的元素去重（对比元素全部相同）
 * @param  array 要去重的数组
 * @param  tags 要对比去重的元素
 * @returns  去重后的新数组
 */
export const removeSameObject = <T, K extends keyof T>(array: T[], ...tags: K[]): T[] => {
  const map = new Map<string, T>();

  return array.filter(item => {
    const key = tags.map(tag => item[tag]).join('|');
    if (!map.has(key)) {
      map.set(key, item);
      return true;
    }
    return false;
  });
}