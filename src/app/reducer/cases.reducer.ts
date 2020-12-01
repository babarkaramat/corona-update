import { CasesModel } from '../models/cases.model';

export const cases = 'cases';

export function casesReducer(state: CasesModel[] = [], action) {
    switch (action.type) {
        case cases:
            state = [];
            return [...state, action.payload];
        default:
            return state;
    }
}

