import {actionTypes} from '../constants/actiion-types'

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const slectedProduct = (product) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}