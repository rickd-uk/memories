import { AUTH } from '../constants/actionTypes'
import * as api from '../api'

export const signin = (formData, history) => async (dispatch) => {
  try {
    // log in user
    const { data } = await api.signIn(formData)

    history.push('/')
  } catch (error) {
    console.error(error)
  }
}

export const signup = (formData, history) => async (dispatch) => {
  try {
    // sign up user

    history.push('/')
  } catch (error) {
    console.error(error)
  }
}
