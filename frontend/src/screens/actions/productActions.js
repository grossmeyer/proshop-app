import axios from 'axios'
import {
  PRODUCT_LIST_REQUEST as REQUEST,
  PRODUCT_LIST_SUCCESS as SUCCESS,
  PRODUCT_LIST_FAIL as FAIL
} from '../constants/productConstants'

export const listProducts = () => async dispatch => {
  try {
    dispatch({ type: REQUEST })
    const { data } = await axios.get('/api/products')
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