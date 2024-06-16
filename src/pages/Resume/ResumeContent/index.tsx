import * as UseTemplateList from './UseTemplate';
import ScrollBox from '@/components/ScrollBox'
import MessageDispatch, {MESSAGE_EVENT_NAME_MAPS} from '@/utils/messageDispatch.ts'
import './index.scss'
import useMount from "@/hooks/useMount.ts";
import useUnmount from "@/hooks/useUnmount.ts";
import {useState} from "react";
import { RESUME_TOOLBAR_MAPS } from '@/constants/resume.ts'
import PersonalForm from './UseForm/Personal'
import CertificateForm from './UseForm/Certificate';
import ContactForm from './UseForm/Contact';
import EducationForm from './UseForm/Education';

const ResumeContent = () => {
    const [height, setHeight] = useState(window.innerHeight);
    const [formName, setFormName] = useState("");
    const [showFormModal, setShowFormModal] = useState(false);

    useMount(() => {
        document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
        window.addEventListener('resize', handleResize)
    })
    useUnmount(() => {
        document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
        window.removeEventListener('resize', handleResize);
    })

    // 监听窗口大小变化
    const handleResize = () => {
        setHeight(window.innerHeight); // 更新height状态
    };

    /**
     * 接收订阅事件的传参
     */
    const onReceive = (e: CustomEvent) => {
        MessageDispatch.receive(e, (data: object) => {
            console.log('发布订阅，传参值为: ', data);
            setShowFormModal(true);
            setFormName(data.formName)
        });
    };

    // 关闭弹窗
    const onClose = () => {
        setShowFormModal(false);
        setFormName('');
    }

    const HEADER_ACTION_HEIGHT = 92;

    return (
        <ScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
            <UseTemplateList.TemplateOne />
            {showFormModal && (
              <>
                  {formName === RESUME_TOOLBAR_MAPS.personal && <PersonalForm onClose={onClose}/>}
                  {formName === RESUME_TOOLBAR_MAPS.certificate && <CertificateForm onClose={onClose} />}
                  {formName === RESUME_TOOLBAR_MAPS.contact && <ContactForm onClose={onClose}/>}
                  {formName === RESUME_TOOLBAR_MAPS.education && <EducationForm onClose={onClose}/>}
              </>
            )}
        </ScrollBox>
    )
}

export default ResumeContent;