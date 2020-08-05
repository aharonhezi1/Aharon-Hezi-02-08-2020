import { Action } from '@ngrx/store'
import { Location } from './../models/location.model'
import * as LocationActions from './../actions/location.actions'


// Section 2
export function favoritesReducer(state: Location[] = [], action: LocationActions.Actions) {

    // Section 3
    switch(action.type) {
        case LocationActions.ADD_LOCATION:
            return [...state, action.payload];
        case LocationActions.REMOVE_LOCATION:
            return state.filter(location=>location.key!==action.payload)
        default:
            return state;
    }
}