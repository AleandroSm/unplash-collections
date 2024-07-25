import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { addPhotoToSelectedCollection, removePhotoFromSelectedCollection, selectCollectionByName} from "../store/collections/collectionsSlice"
import {startAddCollection, startAddPhotoToCollection, startDeletePhotoFromCollection} from "../store/collections/thunks"
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export const useCollection = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {collections} = useSelector(state => state.collections)
    const {selectedPhoto} = useSelector(state => state.photos)
    const notify = (message) => toast.success(message)
    const notifyError = (message) => toast.error(message)
    let photoInCollections = []
    let photoNotInCollections = []

    photoInCollections = collections.filter(collection => collection.photosUrls.some(url => url.slice(0,url.indexOf('?')) === selectedPhoto.urls.regular.slice(0,selectedPhoto.urls.regular.indexOf('?'))))
    photoNotInCollections = collections.filter(collection => collection.photosUrls.every(url => url.slice(0,url.indexOf('?')) !== selectedPhoto.urls.regular.slice(0,selectedPhoto.urls.regular.indexOf('?'))))

    const existsCollection = (name) => collections.some(collection => collection.name.toLowerCase() === name.toLowerCase())

    const addPhotoToCollection = (name) => {
        dispatch(selectCollectionByName(name))
        dispatch(addPhotoToSelectedCollection(selectedPhoto.urls.regular))
        dispatch(startAddPhotoToCollection())
        notify("Photo added to collection")
    }

    const removePhotoFromCollection = (name) => {
        dispatch(selectCollectionByName(name))
        dispatch(removePhotoFromSelectedCollection(selectedPhoto.urls.regular.slice(0,selectedPhoto.urls.regular.indexOf('?'))))
        dispatch(startDeletePhotoFromCollection())
        notify("Photo removed from collection")
    }

    const createCollecttion = (name) => {
        if(!existsCollection(name)){
            dispatch(startAddCollection(name))
            notify("Collection created")
        }else notifyError("Collection already exists")
    }

    const selectedCollection = (name) => {
        dispatch(selectCollectionByName(name))
        navigate(`/collections/${name}`)
    }

    return {
        collections,
        photoInCollections,
        photoNotInCollections,
        addPhotoToCollection,
        createCollecttion,
        removePhotoFromCollection,
        selectedPhoto,
        selectedCollection
    }

}