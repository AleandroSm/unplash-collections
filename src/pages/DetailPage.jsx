import { useSelector } from "react-redux"
import { NavBar } from "../components/Navbar"
import { CollectionModal } from "../components/Modal"
import { useState } from "react"
import { CollectionItem } from "../components/CollectionItem"
import removeIcon from "../assets/Remove.svg"
import { UserInfo } from "../components/UserInfo"
import { DetailInfo } from "../components/DetailInfo"
import { useDispatch } from "react-redux"
import { deletePhotoFromCollection, selectCollectionByName } from "../store/collections/collectionsSlice"

export const DetailPage = () => {

    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const {selectedPhoto} = useSelector(state => state.photos)
    const {collections} = useSelector(state => state.collections)
    const filteredCollections = []
    
    for(const collection of collections){
        for(const url of collection.photosUrls){
            const collectionUrl = url.slice(0, url.indexOf('?'))
            const photoUrl = selectedPhoto.urls.regular.slice(0,selectedPhoto.urls.regular.indexOf('?'))
            if(collectionUrl === photoUrl) filteredCollections.push(collection)            
    }
}

    const removePhotoFromCollection = (name) => {
        dispatch(selectCollectionByName(name))
        dispatch(deletePhotoFromCollection(selectedPhoto.urls.regular.slice(0,selectedPhoto.urls.regular.indexOf('?'))))
    }

    const formattedDate = new Date(selectedPhoto?.created_at).toLocaleDateString('en-GB', {year: 'numeric', month: 'long', day: 'numeric'})

    return (
        <>
            <NavBar />

            < CollectionModal isOpen={isOpen} updateOpen={() => setIsOpen(false)} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:px-24 px-8 mt-12">
            <img src={selectedPhoto.urls.full} alt="" className="h-[44rem] object-cover" />
            <div>
                < UserInfo photo={selectedPhoto.user.profile_image.medium} 
                name={selectedPhoto.user.name} date={formattedDate} />
                
                < DetailInfo openModal={setIsOpen} />
                
                <h2 className="mt-8 font-bold text-2xl">Collections</h2>
            {
                filteredCollections.map(collection => (
                    < CollectionItem onClick={removePhotoFromCollection} collection={collection} key={collection?.id} text={"Remove"} icon={removeIcon} />
                ))
            }
            </div>

            </div>

        </>
    )
}       