import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  photos: [],
  selectedPhoto: null,
}

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addPhotos: (state,action) => {
        state.photos = action.payload
    },
    selectPhoto: (state, action) => {
        state.selectedPhoto= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addPhotos, selectPhoto } = photosSlice.actions

export default photosSlice.reducer