import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: null,
    firstName: null,
    lastName: null,
    isLoading: false,
    isConnected: false,
    userName: null
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
        },
        setUserData: (state, action) => {
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            }
        },
        setLoading: (state,action) => {
            return {
                ...state,
                isLoading: action.payload
            }
        },
        setConnected: (state,action) => {
            return {
                ...state,
                isConnected: action.payload
            }
        },
        setUsername: (state,action) => {
            return {
                ...state,
                userName: action.payload
            }
        }
    }
})

export const {actions, reducer} = loginSlice

export const {setBearerToken, setUserData, setLoading, setConnected, setUsername} = actions