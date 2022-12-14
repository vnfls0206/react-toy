import { ReactNode } from 'react';

export interface ICustomColumnHeader {
    content: ReactNode,
    colSpan: number,
    rowSpan: number,
    className: string,
    widthRatio?: string,
}

export const CustomColumnHeader =
    (
        content: ReactNode,
        colSpan: number,
        rowSpan: number,
        className: string,
        widthRatio: string = '',
    ): ICustomColumnHeader =>
        Object.freeze(({
            content: content,
            colSpan: colSpan,
            rowSpan: rowSpan,
            className: className,
            widthRatio: widthRatio,
        }));



export interface ICustomColumnRow{
    text: string | number,
    colSpan: number,
    rowSpan: number,
    className?: string
}

export interface IClickEventRaw {
    data: ICustomColumnRow[],
    rawClickEvent: () => void
}

export const CustomColumnRow =
    (
        text: string | number,
        colSpan: number,
        rowSpan: number,
        className?: string,
    ): ICustomColumnRow =>
        Object.freeze(({
            text: text,
            colSpan: colSpan,
            rowSpan: rowSpan,
            className: className,
        }));