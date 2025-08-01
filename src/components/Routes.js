import React from "react";
import { useRouter } from "./Router.js";
import { matchPath } from '../utils/matchPath.js';
import { Route } from './Route.js';

export const Routes = ({ children }) => {
    const { path } = useRouter();

    for (const child of React.Children.toArray(children)) {
        if (child.type === Route) {
            const match = matchPath(child.props.path, path);
            if (match) {
                return React.cloneElement(child.props.element, { params: match.params });
            }
        }
    }

    return null;
};