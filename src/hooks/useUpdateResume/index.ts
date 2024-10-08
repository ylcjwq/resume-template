import useUpdatePersonal from "./useUpdatePersonal.ts";
import useUpdateContact from "./useUpdateContact.ts";
import useUpdateWork from "./useUpdateWork.ts";
import useUpdateEvaluation from "./useUpdateEvaluation.ts";
import useUpdateHobby from "./useUpdateHobby.ts";
import useUpdateCertificate from "./useUpdateCertificate.ts";
import useUpdateSkill from "./useUpdateSkill.ts";
import useUpdateProjectExperience from "./useUpdateProjectExperience.ts";
import useUpdateSchoolExperience from "./useUpdateSchoolExperience.ts";
import useUpdateWorkExperience from "./useUpdateWorkExperience.ts";

/**
 * 更新简历信息，这是修改 redux 简历信息的唯一方法
 * @param {string[]} stateKey 关键key，如路径为 [base/username] 表示修改 base 对象下的 username
 * @param {string} stateValue 修改后的值
 */
function useUpdateResume() {
  const updatePersonal = useUpdatePersonal();
  const updateContact = useUpdateContact();
  const updateWork = useUpdateWork();
  const updateEvaluation = useUpdateEvaluation();
  const updateHobby = useUpdateHobby();
  const updateCertificate = useUpdateCertificate();
  const updateSkill = useUpdateSkill();
  const updateProjectExperience = useUpdateProjectExperience();
  const updateSchoolExperience = useUpdateSchoolExperience();
  const updateWorkExperience = useUpdateWorkExperience();
  return <T>(stateKey: string, stateValue: T) => {
    const keys = stateKey.split('/') || [];
    if (keys[0]) {
      if (keys[0] === 'base') updatePersonal(keys[1], stateValue);    // 个人信息
      if (keys[0] === 'contact') updateContact(keys[1], stateValue);   // 联系方式
      if (keys[0] === 'work') updateWork(keys[1], stateValue);         // 工作期望
      if (keys[0] === 'evaluation') updateEvaluation(keys[1], stateValue);  // 个人评价
      if (keys[0] === 'hobby') updateHobby(stateValue);             // 个人爱好
      if (keys[0] === 'certificate') updateCertificate(keys[1], stateValue); // 荣誉证书
      if (keys[0] === 'skill') updateSkill(keys[1], stateValue);    // 技能清单
      if (keys[0] === 'projectExperience') updateProjectExperience(stateValue);    // 项目经验
      if (keys[0] === 'schoolExperience') updateSchoolExperience(stateValue);    // 学校经历
      if (keys[0] === 'workExperience') updateWorkExperience(stateValue);    // 校园实习
    }
  };
}

export default useUpdateResume;