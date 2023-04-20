import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './src/dataSlice'

export const store = configureStore({
    reducer: {
        data:dataReducer
    }
})