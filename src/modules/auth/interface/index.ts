

export const AuthType = {
    ROLE_ADMIN: 'ROLE_ADMIN',
    ROLE_USER: 'ROLE_USER',
    ROLE_GUEST: 'ROLE_GUEST',
    ROLE_NONE: 'ROLE_NONE'
} as const;



export type AuthType = typeof AuthType[keyof typeof AuthType];


export interface ISignInBodyData {
    userId: string,
    userPassword: string
}

export interface ISignInDto {

}

export interface ISignOutBodyData {

}

