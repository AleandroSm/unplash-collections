import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { addPhotoToSelectedCollection, removePhotoFromSelectedCollection, selectCollectionByName} from "../store/collections/collectionsSlice"
import {startAddPhotoToCollection, startDeletePhotoFromCollection} from "../store/collections/thunks"

export const useCollection = () => {
    const dispatch = useDispatch()
    const {collections} = useSelector(state => state.collections)
    const {selectedPhoto} = useSelector(state => state.photos)
    let photoInCollections = []
    let photoNotInCollections = []

    photoInCollections = collections.filter(collection => collection.photosUrls.some(url => url.slice(0,url.indexOf('?')) === selectedPhoto.urls.regular.slice(0,selectedPhoto.urls.regular.indexOf('?'))))
    photoNotInCollections = collections.filter(collection => collection.photosUrls.every(url => url.slice(0,url.indexOf('?')) !== selectedPhoto.urls.regular.slice(0,selectedPhoto.urls.regular.indexOf('?'))))


    const addPhotoToCollection = (name) => {
        dispatch(selectCollectionByName(name))
        dispatch(addPhotoToSelectedCollection(selectedPhoto.urls.regular))
        dispatch(startAddPhotoToCollection())
    }

    const removePhotoFromCollection = (name) => {
        dispatch(selectCollectionByName(name))
        dispatch(removePhotoFromSelectedCollection(selectedPhoto.urls.regular.slice(0,selectedPhoto.urls.regular.indexOf('?'))))
        dispatch(startDeletePhotoFromCollection())
    }

    return {
        photoInCollections,
        photoNotInCollections,
        addPhotoToCollection,
        removePhotoFromCollection,
        selectedPhoto
    }

}