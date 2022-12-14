import create from "zustand";
import {persist} from "zustand/middleware";
import cookie from '../../helpers/cookie';
import { AuthType } from "../interface";


export interface IAuthState {
    authenticated: boolean,

    isIdSave: boolean,
    accessToken: string,
    accessTokenExpirationTime: number,
    refreshTokenExpirationTime: number,

    role: AuthType,

    userSignId: string,

    setIdSave: (isSavedId: boolean) => void,
    setUserSignId: (userCurId:string)=> void,

    setAccessToken: ({ accessToken, accessTokenExpirationTime, refreshTokenExpirationTime }: IAuthData) => void
    setSignInData: ({ accessToken, accessTokenExpirationTime, refreshTokenExpirationTime, role }: IAuthData & {role: AuthType}) => void,
    setAuthenticated: (authenticated: boolean) => void,
    setRole: (role: AuthType) => void,
    signOut: () => void,

};

export interface IAuthData {
    accessToken: string,
    accessTokenExpirationTime: number,
    refreshTokenExpirationTime: number,
}



const useAuthStore = create<IAuthState>()(persist((set, get) => ({

        authenticated: false,

        userSignId:'',

        isIdSave: false,
        accessToken: '',
        accessTokenExpirationTime: 0,
        refreshTokenExpirationTime: 0,
        role: AuthType.ROLE_USER,

        setUserSignId: (userSignId: string) => {
            set((pre) => ({
                ...pre,
                userSignId: userSignId,
            }))
        },


        setIdSave: (isIdSave: boolean) => {
            set((pre) => ({
                ...pre,
                isIdSave: isIdSave,
            }))
        },

        setAccessToken: ({ accessToken, accessTokenExpirationTime, refreshTokenExpirationTime }: IAuthData) => {

            console.log(accessToken);

            set((pre) => ({
                ...pre,
                accessToken: accessToken,
                accessTokenExpirationTime: accessTokenExpirationTime,
                refreshTokenExpirationTime: refreshTokenExpirationTime
            }))
        },


        setSignInData: ({ accessToken, accessTokenExpirationTime, refreshTokenExpirationTime, role }: IAuthData & {role: AuthType}) => {


            set((pre) => ({
                ...pre,
                accessToken: accessToken,
                accessTokenExpirationTime: accessTokenExpirationTime,
                refreshTokenExpirationTime: refreshTokenExpirationTime,
                role: role,
            }))
        },

        setAuthenticated: (authenticated: boolean) => {

            if(authenticated) {
                get().setRole(AuthType.ROLE_ADMIN)
            } else {
                get().setRole(AuthType.ROLE_USER)
            }

            set((pre) => ({
                ...pre,
                authenticated: authenticated,
            }))
        },

        setRole: (role: AuthType) =>
            set(pre => ({
                ...pre,
                role: role,

            })),

        signOut: () =>
            set(pre => ({
                ...pre,
                userSignId:'',
                authenticated: false,
                accessToken: '',
                accessTokenExpirationTime: 0,
                refreshTokenExpirationTime: 0,
            }))


    }),
    {
        name: `${process.env.REACT_APP_NAME}-persist`,
        getStorage: () => localStorage,
        partialize: (state) =>
            Object.fromEntries(
                Object.entries(state).filter(([key]) => !["authenticated", "role"].includes(key))
            ),
    }
));





export default useAuthStore;


