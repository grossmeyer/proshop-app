import axios from 'axios'
import {
  PRODUCT_DETAILS_REQUEST as REQUEST,
  PRODUCT_DETAILS_SUCCESS as SUCCESS,
  PRODUCT_DETAILS_FAIL as FAIL
} from '../constants/productConstants'

export const listProductDetails = id => async dispatch => {
  try {
    dispatch({ type: REQUEST })
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch({ type: SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}