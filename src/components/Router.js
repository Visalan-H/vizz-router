import React, { createContext, useContext, useState, useEffect } from "react";

const RouterContext = createContext();

export const Router = ({ children }) => {
    const [path, setPath] = useState(window.location.pathname);

    useEffect(() => {
        const handlePopState = () => {
            setPath(window.location.pathname);
        };

        window.addEventListener('popstate', handlePopState);

        return () => window.removeEventListener('popstate', handlePopState);

    }, []);

    const navigate = (to, options = {}) => {
        if (typeof to === 'number') {
            window.history.go(to);
            return;
        }
        if (options.replace) {
            window.history.replaceState({}, '', to);
        }
        else {
            window.history.pushState({}, '', to);
        }
        setPath(to);
    };

    return (
        <RouterContext.Provider value={{ path, navigate }}>
            {children}
        </RouterContext.Provider>
    );
};

export const useRouter = () => {
    const context = useContext(RouterContext);
    if (!context) throw new Error('useRouter must be used within a Router');
    return context;
};

export const useNavigate = () => {
    const { navigate } = useRouter();
    return navigate;
};