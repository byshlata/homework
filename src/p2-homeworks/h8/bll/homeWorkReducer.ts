import {UserType} from "../HW8";
import {ActionType} from "./tests/homeWorkReducer.test";

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {

            return action.payload === 'up'
                ? [... state].sort((a, b) => a.age - b.age)
                : [...state].sort((a, b) => b.age - a.age)
        }

        case 'check': {

            return state.filter(f => f.age >= 18)
        }
        default: return state
    }
}