import { AdmitModel } from './../models/admit.model';

export const admit = 'admit';

export function admitReducer(state: AdmitModel[] = [], action) {
    switch (action.type) {
        case admit:
            state = [];
            return [...state, action.payload];
        default:
            return state;
    }
}

