import moment from 'moment';

export const getStartDay = () => {
    const date:moment.Moment = moment();
    const period:number = 1;
    date.subtract(period, "days");

    return date.format('YYYY-MM-DD');
}
export const getEndDay = () => {
    return getTodayDay();
}

export const getTodayDay = () => {
    const date:moment.Moment = moment();
    return date.format('YYYY-MM-DD');
}

export const getDefaultStartTime =(option?:number) =>  {
    return `00:00:00`;
}

export const getDefaultEndTime =() =>  {
    return `23:59:59`;
}

export const getStartTime =(option:number = 0) =>  {
    const time:moment.Moment=moment();
    time.subtract(option, "minutes");

    return time.format('HH:mm:ss');
}