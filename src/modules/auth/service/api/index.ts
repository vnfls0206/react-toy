import axiosInstance from '../../../axiosinstance';
import { AUTH_URL, SIGN_IN_URL, SIGN_OUT_URL, TOKEN_REISSUE_URL } from './url';
import {ISignInBodyData, ISignOutBodyData} from '../../interface';

const authApi  = {
    signIn: (bodyData: ISignInBodyData) => axiosInstance.post(`${AUTH_URL}${SIGN_IN_URL}`, bodyData, {noRepeat: true}),
    signOut: (bodyData: ISignOutBodyData) => axiosInstance.post(`${AUTH_URL}${SIGN_OUT_URL}`, bodyData, {noRepeat: true}),
    tokenReissue: () => axiosInstance.post(`${AUTH_URL}${TOKEN_REISSUE_URL}`, null, { noRepeat: true }),
};

export default authApi;