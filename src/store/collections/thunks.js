import { firebaseDB } from "../../firebase/config"
import {doc, collection, setDoc, getDocs, deleteDoc} from "firebase/firestore"
import { addCollection, removeCollection, setCollection, updatePhotoFromCollection, } from "./collectionsSlice"

export const startAddCollection = (name) => {
    return async (dispatch, getState) => {
        const {id} = getState().collections
        const newDoc = doc(collection(firebaseDB,`${id}/unplash/collections`))
        // const newCollection = {id:newDoc.id,name,photos:[{idPhoto:"", urlPhoto:"", alt:""}]}
        const newCollection = {id:newDoc.id,name,photos:[]}
        await setDoc(newDoc, newCollection) 
        dispatch(addCollection(newCollection))
    }
}

export const startDeleteCollection = () => {
    return async (dispatch, getState) => {
        const {id, selectedCollection} = getState().collections
        const docRef = doc(firebaseDB,`${id}/unplash/collections/${selectedCollection.id}`)
        await deleteDoc(docRef)
        dispatch(removeCollection(selectedCollection.id))
    }
}

export const startLoadingCollections = () => {
    return async (dispatch, getState) => {
        const {id} = getState().collections
        const collectionsRef = collection(firebaseDB,`${id}/unplash/collections`)
        const docs = await getDocs(collectionsRef)
        const collections = []
        docs.forEach(doc => {
            collections.push({id:doc.id,...doc.data()})
        })
        dispatch(setCollection(collections))
    }
}

export const startAddPhotoToCollection = () => {
    return async (dispatch, getState) => {
        const {id, selectedCollection} = getState().collections
        const collectionToFirebase = {...selectedCollection}
        delete collectionToFirebase.id
        const docRef = doc(firebaseDB,`${id}/unplash/collections/${selectedCollection.id}`)        
        await setDoc(docRef, collectionToFirebase, {merge:true})
        dispatch(updatePhotoFromCollection(selectedCollection))
        
    }
}

export const startDeletePhotoFromCollection = () => {
    return async (dispatch, getState) => {
        const {id,selectedCollection} = getState().collections
        const collectionToFirebase = {...selectedCollection}
        delete collectionToFirebase.id
        const docRef = doc(firebaseDB,`${id}/unplash/collections/${selectedCollection.id}`)
        await setDoc(docRef, collectionToFirebase, {merge:true})
        dispatch(updatePhotoFromCollection(selectedCollection))        
    }
}