export const LanguageType = {
    KOREAN: 'ko',
    ENGLISH: 'en',
} as const;

export type LanguageType = typeof LanguageType[keyof typeof LanguageType];