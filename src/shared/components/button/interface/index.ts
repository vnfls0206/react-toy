export const ColorOption = {
    GREEN: 'GREEN',
    BLACK: 'BLACK',
} as const;

export type ColorOption = typeof ColorOption[keyof typeof ColorOption];