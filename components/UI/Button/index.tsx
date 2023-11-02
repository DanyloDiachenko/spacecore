import ButtonProps from "./button.props";

const Button = ({
    background,
    children,
    className,
    border,
    onClick,
    ...rest
}: ButtonProps): JSX.Element => {
    return (
        <button
            className={`button-ui ${className ? className : ""} ${
                background === "rose" ? "rose" : "white"
            } ${border === "rose" ? "border-rose" : ""}`}
            {...rest}
            onClick={onClick && onClick}
        >
            {children}
        </button>
    );
};

export default Button;
