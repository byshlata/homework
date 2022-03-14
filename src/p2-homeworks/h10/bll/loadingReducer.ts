import {AppStoreType} from "./store";

const initState = {
    loading: false
}

type initStateType = typeof initState;


export const loadingReducer = (state = initState, action: loadingACType): initStateType => {
    switch (action.type) {
        case 'LOADING': {
            return {
                ...state,
                loading: !state.loading
            }
        }
        default:
            return state
    }
}

type loadingACType = ReturnType<typeof loadingAC>


export const loadingAC = () => ({type: 'LOADING'} as const)// fix any