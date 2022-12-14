import create, {GetState, SetState} from "zustand";
import {persist} from "zustand/middleware";


export interface ILanguageState {
    language: string,
    setLanguage: (by: string) => void

};



const useLanguageStore = create<ILanguageState>()(persist((set, get) => ({
        language: 'ko',
        setLanguage: (by) =>
            set(() => ({ language: by })),
    }),
    {
        name: `${process.env.REACT_APP_NAME}-persist`,
        getStorage: () => localStorage,
    }
));



export default useLanguageStore;


