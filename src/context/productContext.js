import { useContext, createContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import productReducer, { PRODUCTS_ACTIONS } from '../reducer/productReducer'

const API = 'https://api-nests.onrender.com/api/products'
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleLoading: false,
  singleProduct: {},
}

// context
const ProductContext = createContext()

// provider
// const ProductProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(productReducer, initialState)

//   const getProducts = async () => {
//     dispatch({ type: PRODUCTS_ACTIONS.SET_LOADING });
//     try {
//       // Simulate API call delay
//       await new Promise((resolve) => setTimeout(resolve, 500));

//       dispatch({
//         type: PRODUCTS_ACTIONS.SET_PRODUCTS,
//         payload: productsData,
//       });
//     } catch (error) {
//       dispatch({ type: PRODUCTS_ACTIONS.SET_ERROR });
//     }
//   };
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState)

  const getProducts = async (url) => {
    dispatch({ type: PRODUCTS_ACTIONS.SET_LOADING })
    try {
      const res = await axios.get(url)
      console.log(res.data)
      dispatch({
        type: PRODUCTS_ACTIONS.SET_PRODUCTS,
        payload: res.data.results,
      })
    } catch (error) {
      dispatch({ type: PRODUCTS_ACTIONS.SET_ERROR })
    }
  }

  const getSingleProduct = async (url) => {
    dispatch({ type: PRODUCTS_ACTIONS.SET_LOADING })
    try {
      console.log(url)
      const res = await axios.get(url)
      const product = res.data.data
      console.log(res.data.data)
      dispatch({
        type: PRODUCTS_ACTIONS.SET_SINGLE_PRODUCT,
        payload: product,
      })
    } catch (error) {
      dispatch({ type: PRODUCTS_ACTIONS.SET_ERROR })
    }
  }

  useEffect(() => {
    getProducts(API)
  }, [])

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

// custom hook for global context
export const useProduct = () => {
  return useContext(ProductContext)
}

export default ProductProvider
