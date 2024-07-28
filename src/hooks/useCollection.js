import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { addPhotoToSelectedCollection, removePhotoFromSelectedCollection, selectCollectionByName} from "../store/collections/collectionsSlice"
import {startAddCollection, startAddPhotoToCollection, startDeletePhotoFromCollection} from "../store/collections/thunks"
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useModal } from "./useModal"
import { useState } from "react"

export const useCollection = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {handleCloseModal} = useModal()
    const {collections} = useSelector(state => state.collections)
    const {selectedPhoto} = useSelector(state => state.photos)
    const notify = (message) => toast.success(message)
    const notifyError = (message) => toast.error(message)
    const photoInCollections = collections.filter(collection => collection.photosUrls.some(url => url.slice(0,url.indexOf('?')) === selectedPhoto?.urls.regular.slice(0,selectedPhoto?.urls.regular.indexOf('?'))))
    const photoNotInCollections = collections.filter(collection => collection.photosUrls.every(url => url.slice(0,url.indexOf('?')) !== selectedPhoto?.urls.regular.slice(0,selectedPhoto?.urls.regular.indexOf('?'))))
    const [collectionsModal, setCollectionsModal] = useState(photoNotInCollections)

   
    const existsCollection = (name) => collections.some(collection => collection.name.toLowerCase() === name.toLowerCase())

    const addPhotoToCollection = (name) => {
        dispatch(selectCollectionByName(name))
        dispatch(addPhotoToSelectedCollection(selectedPhoto?.urls.regular))
        dispatch(startAddPhotoToCollection())
        handleCloseModal()
        setCollectionsModal(collections.filter(collection => collection.photosUrls.some(url => url.slice(0,url.indexOf('?')) === selectedPhoto?.urls.regular.slice(0,selectedPhoto?.urls.regular.indexOf('?')))))
    }

    const searchCollectionsInModal = (name = "") => {
        if(name.length <= 2) setCollectionsModal(photoNotInCollections)
        else setCollectionsModal(photoNotInCollections.filter(collection => collection.name.toLowerCase().includes(name.toLowerCase())))
    }

    const removePhotoFromCollection = (name) => {
        dispatch(selectCollectionByName(name))
        dispatch(removePhotoFromSelectedCollection(selectedPhoto?.urls.regular.slice(0,selectedPhoto.urls.regular.indexOf('?'))))
        dispatch(startDeletePhotoFromCollection())
        notify("Photo removed from the collection")
    }

    const createCollecttion = (name) => {
        if(!existsCollection(name)){
            dispatch(startAddCollection(name))
            notify("Collection created")
            handleCloseModal()
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
        selectedCollection,
        collectionsModal,
        searchCollectionsInModal
    }

}