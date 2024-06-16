// 自定义事件类型
export const MESSAGE_EVENT_NAME_MAPS = {
  OPEN_FORM_MODAL: 'open_form_modal', // 简历模块选择
};

function MessageDispatch () {

}

MessageDispatch.prototype.send = (eventName: string, payload: object) => {
  document.dispatchEvent(new CustomEvent(eventName, { detail: {payload} }));
}

MessageDispatch.prototype.receive = (e: CustomEvent, Fn: (payload: object) => void) => {
  const payload = e?.detail?.payload;
  Fn(payload);
}

export default new MessageDispatch();