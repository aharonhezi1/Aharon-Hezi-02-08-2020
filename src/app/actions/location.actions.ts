import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Location } from './../models/location.model'

export const ADD_LOCATION       = '[LOCATION] Add'
export const REMOVE_LOCATION    = '[LOCATION] Remove'

export class AddLocation implements Action {
    readonly type = ADD_LOCATION

    constructor(public payload: Location) {}
}

export class RemoveLocation implements Action {
    readonly type = REMOVE_LOCATION

    constructor(public payload: string) {}
}


export type Actions = AddLocation | RemoveLocation