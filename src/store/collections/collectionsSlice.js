import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  id: localStorage.getItem("id") || localStorage.setItem("id", Math.random().toString(36).substring(2,9)),
  selectedCollection: [],
  collections: [],
}

export const collectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    addCollection: (state,action) => {
      state.collections.push(action.payload)
    },
    setCollection: (state, action) => {
      state.collections = action.payload
    },
    selectCollectionByName: (state, action) => {
      state.selectedCollection = state.collections.find(collection => collection.name === action.payload)
    },
    addPhotoToSelectedCollection: (state,action) => {
      const {photos} = state.selectedCollection
      photos.push(action.payload)
    },
    removePhotoFromSelectedCollection: (state,action) => {
      state.selectedCollection.photos = state.selectedCollection.photos.filter(photo => photo.idPhoto !== action.payload)
    },
    updatePhotoFromCollection: (state, action) => {
      state.collections = state.collections.map(collection => collection.name === state.selectedCollection.name ? action.payload : collection)
    },
  },
})

// Action creators are generated for each case reducer function
export const { selectCollectionByName,  
  setCollection,
  addCollection,
  addPhotoToSelectedCollection,
  removePhotoFromSelectedCollection,
  updatePhotoFromCollection,
} = collectionsSlice.actions

export default collectionsSlice.reducer