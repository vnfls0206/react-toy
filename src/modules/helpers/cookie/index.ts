
const cookie = {

    getCookie: (name: string) => {
        const value = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
        return value ? value[2] : null;

    },
    setCookie: (name: string, value: string, exp: number) => {
        const date = new Date();
        date.setTime(date.getTime() + exp * 24  * 60 * 60 * 1000)
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`

    },
    removeCookie: (name: string) => {
        document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
    }

}


export default cookie;