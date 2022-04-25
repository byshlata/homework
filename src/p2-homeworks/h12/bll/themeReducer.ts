export type initialStateType = {
    theme: string
}


const initState: initialStateType = {
    theme: 'some',
};

export const themeReducer = (state = initState, action: ActionType): initialStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.selectedTheme };
        }
        default: return state;
    }
};




export const themeAC = (selectedTheme: string) => ({type: "CHANGE-THEME", selectedTheme,} as const)

type ActionType = ReturnType<typeof themeAC>


export const changeThemeC = (): any => {}; // fix any