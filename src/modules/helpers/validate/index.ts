const Validate = {
    // ^ 문자열의 시작
    // ? 존재여부 (앞의 문자가 없거나 1개 있는경우)
    // * 반복 여부 표현 - (aa)* (aa) 가 0개 ~ infinite까지 모두 가능
    // $ 문자열의 종료
    // (25[0~4]) or (2[0~4][0~9]) or ([0 or 1][0~9][0~9])
    ip: (value: string | undefined) => {
        const regExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if(value &&  value.match(regExp)) {
            return true;
        }
        return false;
    },
    port: (value: number | string) => {
        if( typeof value === "number"){
            return value >= 1 && value <= 65535;
        }else{
            const v = Number.parseInt(value);
            return v >= 1 && v <= 65535;
        }
    },

    /*
     *  User Validation
     *  email, password, name, phone-number
     */
    email: (value:string) => {
        // 숫자 or 알파벳으로 시작 ; @ 포함;  마지막 문자열 2-3자리여야 한다.
        const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        if(value.match(regExp) != null){
            return true;
        }
        return false;
    },

    password: (value: string) => {
        // 소문자 or 대문자 1개 , 숫자1개, 특수문자 1개 이상 포함하는 8~15 글자
        const regExp = /^(?=.*\d)(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(value.match(regExp) != null){
            return true;
        }
        return false;
    },

    name : (value: string) => {
        // 한글만 입력 가능
        const regExp = /^[가-힣]*$/;
        if(value.match(regExp) != null){
            return true;
        }
        return false;
    },

    phone: (value: string) => {
        // 11글자 이하 {3} - {4} - {4}
        // - or . 포함
        const regExp = /^\(?([0-9]{3})\)?[-. ]([0-9]{4})[-. ]([0-9]{4})$/;
        // const regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        if(value.match(regExp) != null){
            return true;
        }
        return false;
    }
};

export default Validate;