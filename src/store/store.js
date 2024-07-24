import { configureStore } from '@reduxjs/toolkit'
import photosSlice from './photos/photosSlice'
import collectionsSlice from './collections/collectionsSlice'

export const store = configureStore({
  reducer: {
    photos: photosSlice,
    collections: collectionsSlice
  },
})