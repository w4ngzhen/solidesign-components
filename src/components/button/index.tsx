import {
    Component,
    JSXElement,
} from "solid-js";

export type ButtonType = "primary" | "dashed" | "link" | "text";
export type ButtonShape = 'default' | 'circle';
export type ButtonSize = "small" | "default" | "large";

export type ButtonProps = {
    type?: ButtonType;
    disabled?: boolean;
    shape?: ButtonShape;
    size?: ButtonSize;
    onClick?: () => void;
    className?: string;
    children?: JSXElement;
}

export const Button: Component<ButtonProps> = (props: ButtonProps) => {
    const {
        type,
        disabled = false,
        shape = "default",
        size = "default",
        className,
        onClick,
        children,
    } = props;
    return (
        <button
            onClick={onClick}
            class='sd-button'
            classList={{
                "sd-button-shape-circle": shape === 'circle',
                "sd-button-type-primary": type === "primary",
                "sd-button-type-dashed": type === "dashed",
                "sd-button-type-text": type === "text",
                "sd-button-type-link": type === "link",
                "sd-button-size-large": size === "large",
                "sd-button-size-small": size === "small",
            }}
            disabled={disabled}
        >
            <span>
                {children}
            </span>
        </button>
    );
}