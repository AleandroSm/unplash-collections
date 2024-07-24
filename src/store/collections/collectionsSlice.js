import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  
  collections: [
    {
      id: "abc",
      name: 'ocean',
      photosUrls: ["https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQyMjJ8MHwxfHNlYXJjaHwxfHxvY2VhbnxlbnwwfDB8fHwxNzIxNTk3NjA2fDA&ixlib=rb-4.0.3&q=80&w=1080"]
    },
    {
      id: "fed",
      name: 'japan',
      photosUrls: ["https://images.unsplash.com/photo-1522383225653-ed111181a951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQyMjJ8MHwxfHNlYXJjaHwxMnx8amFwYW58ZW58MHwwfHx8MTcyMTU5NTU2OXww&ixlib=rb-4.0.3&q=80&w=1080"]
    },
    {
      id: "ghi",
      name: 'soccer',
      photosUrls: ["https://images.unsplash.com/photo-1487466365202-1afdb86c764e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQyMjJ8MHwxfHNlYXJjaHw5fHxzb2NjZXJ8ZW58MHwwfHx8MTcyMTU5NTc4OHww&ixlib=rb-4.0.3&q=80&w=1080"]
    },
    {
      id: "jkl",
      name: 'diverse',
      photosUrls: ["https://images.unsplash.com/photo-1487466365202-1afdb86c764e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQyMjJ8MHwxfHNlYXJjaHw5fHxzb2NjZXJ8ZW58MHwwfHx8MTcyMTU5NTc4OHww&ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQyMjJ8MHwxfHNlYXJjaHwxMnx8amFwYW58ZW58MHwwfHx8MTcyMTU5NTU2OXww&ixlib=rb-4.0.3&q=80&w=1080"
      ]
    }
  ],
  selectedCollection: null,
}

export const collectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    selectCollectionByName: (state, action) => {
      state.selectedCollection = state.collections.find(collection => collection.name === action.payload)
    },
    addPhotoToCollection: (state,action) => {
     const {selectedCollection, collections} = state
     const collectionIndex = collections.findIndex(collection => collection.name === selectedCollection.name)
     if(collectionIndex > -1){
       state.collections[collectionIndex].photosUrls.push(action.payload)
       }
    },
    deletePhotoFromCollection: (state, action) => {
      const {selectedCollection, collections} = state
      const collectionIndex = collections.findIndex(collection => collection.name === selectedCollection.name)
      if(collectionIndex > -1){
        state.collections[collectionIndex].photosUrls = state.collections[collectionIndex].photosUrls.filter(url => url.slice(0,url.indexOf('?')) !== action.payload)
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { selectCollectionByName, addPhotoToCollection, deletePhotoFromCollection} = collectionsSlice.actions

export default collectionsSlice.reducer