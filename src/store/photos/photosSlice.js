import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  photos: [],
  selectedPhoto: null,
  isLoading: true
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
    setLoadingPhotos: (state, action) => {
        state.isLoading = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addPhotos, selectPhoto, setLoadingPhotos } = photosSlice.actions

export default photosSlice.reducer