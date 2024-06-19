import style from './index.module.scss';
import AvatarImage from '@/assets/react.svg';
import { useSelector } from 'react-redux';
import uploadIcon from '@/assets/icon/upload.png';
import Button from '@/components/Button';
import ImageUpload from '@/components/Upload/ImageUpload';
import useUpdateResume from '@/hooks/useUpdateResume';
import {State} from "@/type/storeState.ts";

/**
 * 头像
 * @constructor
 */
const Avatar = () => {

  const updateResume = useUpdateResume();
  const base: TSResume.Base = useSelector((state: State) => state.resumeModel.base);

  // 更新用户的简历头像
  const onUpdateUserAvatar = (avatarUrl: string) => {
    updateResume<string>('base/avatar', avatarUrl);
  };

  return (
    <div className={style.box}>
      {!base?.avatar && (
        <ImageUpload
          icon={uploadIcon}
          accept="image/*"
          multiple={false}
          onAfterChange={(files: TSUpload.File[]) => {
            onUpdateUserAvatar(files[0]?.base64URL);
          }}
        />
      )}
      {base?.avatar && (
        <div className={style.avatar}>
          <img src={base?.avatar || AvatarImage} alt={''}/>
          <div className={style.mask}>
            <Button size="small" className={style.btnChange} onClick={() => onUpdateUserAvatar('')}>
              更换
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Avatar;
