import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { addPhotoToSelectedCollection, removePhotoFromSelectedCollection, selectCollectionByName} from "../store/collections/collectionsSlice"
import {startAddCollection, startAddPhotoToCollection, startDeleteCollection, startDeletePhotoFromCollection} from "../store/collections/thunks"
import { useNavigate } from "react-router-dom"
import { useModal } from "./useModal"
import { useState, useEffect } from "react"
import { useToast } from "./useToast"

export const useCollection = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {handleCloseModal} = useModal()
    const {collections} = useSelector(state => state.collections)
    const {selectedPhoto} = useSelector(state => state.photos)
    const {succesNotify, errorNotify} = useToast()
    const [collectionsModal, setCollectionsModal] = useState([])
    
    useEffect(() => {
        const photoNotInCollections = collections.filter(collection => 
          collection.photos.every(photo => photo.idPhoto !== selectedPhoto?.id)
        );
        setCollectionsModal(photoNotInCollections);
      }, [collections, selectedPhoto]);

    const photoInCollections = collections.filter(collection => collection.photos.some(photo => photo.idPhoto === selectedPhoto?.id))
    const existsCollection = (name) => collections.some(collection => collection.name.toLowerCase() === name.toLowerCase())

    const addPhotoToCollection = (name) => {
        dispatch(selectCollectionByName(name))
        dispatch(addPhotoToSelectedCollection({idPhoto:selectedPhoto.id,urlPhoto:selectedPhoto.urls.regular, alt:selectedPhoto.alt_description}))
        dispatch(startAddPhotoToCollection())
        handleCloseModal()
    }

    const searchCollectionsInModal = (name = "") => {
        if (name.length <= 2) {
          setCollectionsModal(collections.filter(collection => 
            collection.photos.every(photo => photo.idPhoto !== selectedPhoto?.id)
          ));
        } else {
          setCollectionsModal(collections.filter(collection => 
            collection.name.toLowerCase().includes(name.toLowerCase()) &&
            collection.photos.every(photo => photo.idPhoto !== selectedPhoto?.id)
          ));
        }
      };

    const removePhotoFromCollection = (name) => {
        dispatch(selectCollectionByName(name))
        dispatch(removePhotoFromSelectedCollection(selectedPhoto.id))
        dispatch(startDeletePhotoFromCollection())
        succesNotify("Photo removed from the collection")
        // notify("Photo removed from the collection")
    }

    const createCollecttion = (name) => {
        if(!existsCollection(name)){
            dispatch(startAddCollection(name))
            succesNotify("Collection created")
            handleCloseModal()
        }else errorNotify("Collection already exists")
    }

    const deleteCollection = (name) => {
      dispatch(selectCollectionByName(name))
      dispatch(startDeleteCollection())
      succesNotify("Collection deleted")
    }

    const selectedCollection = (name) => {
        dispatch(selectCollectionByName(name))
        navigate(`/collections/${name}`)
    }

    return {
        collections,
        photoInCollections,
        // photoNotInCollections,
        addPhotoToCollection,
        createCollecttion,
        deleteCollection,
        removePhotoFromCollection,
        selectedPhoto,
        selectedCollection,
        collectionsModal,
        searchCollectionsInModal
    }
}