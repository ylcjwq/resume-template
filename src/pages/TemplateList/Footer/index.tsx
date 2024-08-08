import style from './index.module.scss'
import Button from '@/components/Button';
import {useSelector} from "react-redux";
import {TemplateState} from "@/type/storeState.ts";
import {useNavigate} from "react-router";

function Footer() {
  const navigate = useNavigate();
  const selectTemplate = useSelector((state: TemplateState) => state.templateModel.selectTemplate);
  const onMadeResume = () => {
    navigate({
      pathname: '/resume',
      search: `?index=${selectTemplate.templateIndex}&fromPath=templateList`,
    });
  };

  return (
    <div className={style.footer}>
      <Button size="middle" width={200} className={style.useBtn} onClick={onMadeResume}>
        以此模版前往制作简历
      </Button>
    </div>
  );
}

export default Footer;