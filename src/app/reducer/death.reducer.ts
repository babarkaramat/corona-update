import { DeathModel } from '../models/death.model';



export const death = 'death';



export function deathReducer(state: DeathModel[] = [], action) {
    switch (action.type) {
        case death:
            return [...state, action.payload];
        default:
            return state;
    }
}