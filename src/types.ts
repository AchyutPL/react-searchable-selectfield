export default interface IProps {
    className?: string;
    btnClassName?: string;
    labelName?: string;
    hoverInfo?: string;
    name: string;
    options: { label: string, value: string }[];
    placeholder?: string
    onChange: (data: { label: string, value: string }) => void;
    isEditable?: boolean
    pending?: boolean;
    defaultValue?: string
    isTableMode?: boolean
    isDisabled?: boolean
    fallBackPath?: string
    children?: React.ReactElement
    handleRouteClick?: () => void
    parentClassName?: string
    notFoundText?: string
    style?: React.CSSProperties
}