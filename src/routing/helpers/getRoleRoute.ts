import {IRoutes} from "../routes";
import * as Path from "../path";
import { AuthType } from '../../modules/auth/interface';

export const getRoleRoute = (parentPath: string, role: AuthType, routes: IRoutes[]): IRoutes[] => {
    let result: IRoutes[] = [];

    for(let route of routes){
        if(route.children.length > 0){
            const parent = parentPath === Path.HOME_PATH ? `${route.path}` : `${parentPath}/${route.path}`;
            result.push(...getRoleRoute(parent, role, route.children));
        }
        if(route.roles.length && route.roles.includes(role)){
            const path = parentPath === Path.HOME_PATH ? `${route.path}` : `${parentPath}/${route.path}`;
            const subRoute: IRoutes = {
                title: route.title,
                path: path,
                component: route.component,
                roles: route.roles,
                children: route.children,
            };
            result.push(subRoute);
        }

    }
    return result;
}