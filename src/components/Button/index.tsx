/**
 * @description 按钮组件
 */
import type Button from '@/type/Button.ts';
import './index.scss';

const Button = ({ size = 'small', style, width, children, disabled, className, onClick, border = true }: Button) => {
    return (
        <div
            style={{
                ...style,
                width: width,
            }}
            className={`${className} es-button es-button-${size} ${disabled ? 'es-button-disabled' : ''} ${border ? 'es-button-border' : ''}`}
            onClick={() => {
                onClick && onClick();
            }}
        >
            {children}
        </div>
    );
}

export default Button;