import {ADD, SUB, ADD_INPUT, SUB_INPUT, ADD2} from './actionTypes'


export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function addNumberFromInput(number){
    return {
        type: ADD_INPUT,
        payload: number
    }
}

export function subNumberFromInput(number){
    return {
        type: SUB_INPUT,
        payload: number
    }
}

export function add2(number){
    return {
        type: ADD2,
        payload: number
    }
}

