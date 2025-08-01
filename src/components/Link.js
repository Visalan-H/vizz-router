import React from "react";
import { useRouter } from "./Router";

export const Link = ({ to, children, ...props }) => {

    const { navigate } = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        navigate(to);
    };

    return (
        <a href={to} onClick={handleClick} {...props}>
            {children}
        </a>
    );
};