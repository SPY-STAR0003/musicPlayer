import { Musics } from './../../assets/musics/index';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { MusicsProps } from '../../assets/musics'

interface PlayerState {
  isPlaying : boolean,
  currentMusic : MusicsProps
}

const initialState: PlayerState = {
    isPlaying : false,
    currentMusic : Musics[0]
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
    setCurrentMusic : (state, action : PayloadAction<MusicsProps>) => {
      return {
        ...state,
        currentMusic : action.payload
      }
    }
  },
})

export const { setIsPlaying, setCurrentMusic } = playerSlice.actions

export default playerSlice.reducer