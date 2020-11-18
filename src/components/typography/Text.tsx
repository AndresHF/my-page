type TextProps = React.HTMLAttributes<HTMLDivElement> & {
    bold?: boolean;
    bolder?: boolean;
    style?: React.CSSProperties;
    className?: string;
}

const Text: React.FC<TextProps> = ({
    bold,
    bolder,
    style,
    className,
    children,
    ...props
}) => {
    const aditionalClassname = (bold && "__bold") || (bolder && "__bolder") || "";
    return (
        <div
            className={`paragraph${aditionalClassname} ${className}`}
            style={{ ...style }}
            {...props}
        >
            {children}
        </div>
    );
};

export default Text;
