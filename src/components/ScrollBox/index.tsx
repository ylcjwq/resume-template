import './index.scss';
import IProps from '@/type/ScrollBox.ts'

const ScrollBox = ({ children, maxHeight = 200, style = {}, innerStyle = {}, onScrollTop }: IProps) => {
    function onScroll(e: React.SyntheticEvent) {
        const _event = e.target as HTMLElement || e.currentTarget as HTMLElement;
        onScrollTop && onScrollTop(_event.scrollTop);
    }
    let _style = { ...style };
    if (maxHeight) {
        _style = { ..._style, maxHeight: `${maxHeight}px` };
    }
    return (
        <div className="scroll-box-outer" style={_style} onScroll={onScroll}>
            <div className="scroll-box-hidden" style={{ maxHeight: `${maxHeight}px` }}>
                <div className="scroll-box-inter" style={innerStyle}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ScrollBox;