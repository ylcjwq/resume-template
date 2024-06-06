import React, {useState,useRef,useEffect,useCallback} from 'react'
import './index.scss';
import type {InputProps} from "@/type/Input.ts"

const Input: React.FC<InputProps> = (props) => {
    const [focus, setFocus] = useState<boolean>(false);
    const [text, setText] = useState<string>(props.value || '');
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

    useEffect(() => {
        if (props.value !== undefined) {
            setText(props.value);
        }
    }, [props.value]);

    const saveInput = useCallback((input: HTMLInputElement | HTMLTextAreaElement) => {
        inputRef.current = input;
    }, []);

    const onFocus = useCallback(() => {
        setFocus(true);
    }, []);

    const onBlur = useCallback(() => {
        setFocus(false);
    }, []);

    const onInput = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setText(e.target.value);
        if (props.onChange) {
            props.onChange(e);
        }
    }, [props.onChange]);

    const onClear = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        setText('');
        if (props.onChange) {
            props.onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
        }
    }, [props.onChange]);

    const actionChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (props.onChange) {
            props.onChange(e);
        }
    }, [props.onChange]);

    const renderBefore = () => {
        return props.addonBefore && <div className="my-input-center">{props.addonBefore}</div>;
    };

    const renderAfter = () => {
        return props.addonAfter && <div className="my-input-center">{props.addonAfter}</div>;
    };

    const renderClear = () => {
        return props.allowClear && text && <i className="my-input-clear" onClick={onClear} />;
    };

    const renderInput = () => {
        const { placeholder, size = 'normal', maxLength, id, disabled, autoFocus } = props;
        return (
            <div className={`my-input-input ${size}`}>
                <input
                    type="text"
                    ref={saveInput}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    id={id}
                    disabled={disabled}
                    autoFocus={autoFocus}
                    value={text}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onInput={onInput}
                    onChange={actionChange}
                />
                {renderClear()}
            </div>
        );
    };

    const renderTextarea = () => {
        const { placeholder, maxLength = 1000, id, disabled, allowCount = true, autoFocus, rows } = props;
        const _rows = rows || 3;
        return (
            <div className="my-input-textarea" style={{ height: 24 * _rows }}>
                <textarea
                    ref={saveInput}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    id={id}
                    disabled={disabled}
                    autoFocus={autoFocus}
                    rows={_rows}
                    value={text}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onInput={onInput}
                    onChange={actionChange}
                />
                {renderClear()}
                {allowCount && (
                    <div className="my-input-textarea-footer">
                        <span className={`max-length-text ${text.length >= maxLength? 'max-length-text': ""}`}>
                            {String(text).length}
                        </span>
                        {maxLength && (
                            <>
                                <span>/</span>
                                <span>{maxLength}</span>
                            </>
                        )}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div
            style={props.style}
            className={`my-input ${!props.bgTransparent?'normal': ''} ${focus?'focus':""} ${props.allowClear?"allow-clear":""}`}
        >
            {renderBefore()}
            {props.type === 'textarea' ? renderTextarea() : renderInput()}
            {renderAfter()}
        </div>
    );
};

export default Input;