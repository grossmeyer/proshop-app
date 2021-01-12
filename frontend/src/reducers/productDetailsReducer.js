import {
  PRODUCT_DETAILS_REQUEST as REQUEST,
  PRODUCT_DETAILS_SUCCESS as SUCCESS,
  PRODUCT_DETAILS_FAIL as FAIL
} from '../constants/productConstants'

export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
  switch (action.type) {
    case REQUEST:
      return { loading: true, ...state }
    case SUCCESS:
      return { loading: false, product: action.payload }
    case FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}