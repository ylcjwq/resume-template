import useUpdatePersonal from "./useUpdatePersonal";
import useUpdateContact from "./useUpdateContact.ts";
/**
 * 更新简历信息，这是修改 redux 简历信息的唯一方法
 * @param {string[]} stateKey 关键key，如路径为 [base/username] 表示修改 base 对象下的 username
 * @param {string} stateValue 修改后的值
 */
function useUpdateResume() {
  const updatePersonal = useUpdatePersonal();
  const updateContact = useUpdateContact();
  return <T>(stateKey: string, stateValue: T) => {
    const keys = stateKey.split('/') || [];
    if (keys[0]) {
      if (keys[0] === 'base') updatePersonal(keys[1], stateValue);    // 个人信息
      if (keys[0] === 'contact') updateContact(keys[1], stateValue);   // 联系方式
    }
  };
}

export default useUpdateResume;