import * as UseTemplateList from './UseTemplate';
import ScrollBox from '@/components/ScrollBox'
import MessageDispatch, {MESSAGE_EVENT_NAME_MAPS} from '@/utils/messageDispatch.ts'
import './index.scss'
import useMount from "@/hooks/useMount.ts";
import useUnmount from "@/hooks/useUnmount.ts";
import {useState} from "react";

const ResumeContent = () => {
    const [height, setHeight] = useState(window.innerHeight);
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
        });
    };

    const HEADER_ACTION_HEIGHT = 92;

    return (
        <ScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
            <UseTemplateList.TemplateOne />
        </ScrollBox>
    )
}

export default ResumeContent;