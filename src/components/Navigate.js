import { useRouter } from "./Router";
import { useEffect } from "react";

export const Navigate = ({ to, replace = false }) => {

    const { navigate } = useRouter();

    useEffect(() => {
        navigate(to, { replace });

    }, [to, replace, navigate]);

    return null;
}