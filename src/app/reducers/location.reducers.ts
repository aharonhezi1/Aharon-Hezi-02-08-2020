import { Action } from '@ngrx/store'
import { Location } from './../models/location.model'
import * as LocationActions from './../actions/location.actions'


export function favoritesReducer(state: Location[] = [], action: LocationActions.Actions) {

    switch(action.type) {
        case LocationActions.ADD_LOCATION:
            return [...state, action.payload];
        case LocationActions.REMOVE_LOCATION:
            return state.filter(location=>location.key!==action.payload)
        default:
            return state;
    }
}