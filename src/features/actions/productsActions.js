import fakeStoreApi from '../../apis/fakeStoreApi'
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

export const fetchProducts = () => async  (dispatch) => {
        const response = await fakeStoreApi.get('/products')
        dispatch({type: actionTypes.FETCH_PRODUCTS, payload: response.data })
    }

export const fetchProduct = (id) => async dispatch => {
    const repsosne = await fakeStoreApi.get(`/products/${id}`)
    dispatch({type: actionTypes.SELECTED_PRODUCT, payload: repsosne.data})
}