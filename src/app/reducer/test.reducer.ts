import { TestModel } from './../models/test.model';



export const test = 'test';



export function testReducer(state: TestModel[] = [], action) {
    switch (action.type) {
        case test:
            return [...state, action.payload];
        default:
            return state;
    }
}