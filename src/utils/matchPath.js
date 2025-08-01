export const matchPath = (routePath, currentPath) => {

    if (!routePath) {
        return null;
    }
    
    const routeSegments = routePath.split('/').filter(Boolean);
    const pathSegments = currentPath.split('/').filter(Boolean);

    if (routeSegments.length !== pathSegments.length) {
        return null;
    }

    const params = {};

    for (let i = 0; i < routeSegments.length; i++) {
        const routeSegment = routeSegments[i];
        const pathSegment = pathSegments[i];

        if (routeSegment.startsWith(':')) {
            const paramName = routeSegment.slice(1);
            params[paramName] = pathSegment; 
        }
        else if (routeSegment !== pathSegment) {
            return null; 
        }
    }
    return { params };
};
