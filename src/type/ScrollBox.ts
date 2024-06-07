export default interface IProps {
    /**
     * @description 子组件
     */
    children: React.ReactNode | any;
    /**
     * @description 最大高度，默认200
     */
    maxHeight?: number;
    /**
     * @description 根div样式
     */
    style?: React.CSSProperties;
    /**
     * @description 最内部的div样式
     */
    innerStyle?: React.CSSProperties;
    /**
     * @description 开启了滚动事件之后，回调得到滚动的top
     */
    onScrollTop?: (scrollTop: number) => void;
}