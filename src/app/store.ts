import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    goalsReducer: () => 2 + 2,
  },
})
