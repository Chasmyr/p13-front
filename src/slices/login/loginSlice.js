import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: null,
    firstName: null,
    lastName: null
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setBearerToken: (state,action) => {
            return {
                ...state,
                token: action.payload
            }
        }
    }
})

export const {actions, reducer} = loginSlice

export const {setBearerToken} = actions