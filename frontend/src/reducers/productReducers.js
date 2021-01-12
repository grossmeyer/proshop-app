import {
  PRODUCT_LIST_REQUEST as REQUEST,
  PRODUCT_LIST_SUCCESS as SUCCESS,
  PRODUCT_LIST_FAIL as FAIL
} from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case REQUEST:
      return { loading: true, products: [] }
    case SUCCESS:
      return { loading: false, products: action.payload }
    case FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}