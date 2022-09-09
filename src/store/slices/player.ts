import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface PlayerState {
  isPlaying : boolean,
}

const initialState: PlayerState = {
    isPlaying : false
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setIsPlaying: (state) => {
      return {
        ...state,
        isPlaying : !state.isPlaying
      }
    },
  },
})

export const { setIsPlaying } = playerSlice.actions

export default playerSlice.reducer