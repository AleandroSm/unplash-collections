import { NavBar } from "../components/Navbar"
import { CollectionModal } from "../components/Modal"
import { useState } from "react"
import { CollectionItem } from "../components/CollectionItem"
import removeIcon from "../assets/Remove.svg"
import { UserInfo } from "../components/UserInfo"
import { DetailInfo } from "../components/DetailInfo"
import { SearchBar } from "../components/SearchBar"
import { useCollection } from "../hooks/useCollection"
import addIcon from '../assets/Plus.svg'
import { Toaster, } from "react-hot-toast"

export const DetailPage = () => {

    const {photoInCollections,photoNotInCollections,addPhotoToCollection,removePhotoFromCollection, selectedPhoto}  = useCollection()
    const [isOpen, setIsOpen] = useState(false)

    const formattedDate = new Date(selectedPhoto?.created_at).toLocaleDateString('en-GB', {year: 'numeric', month: 'long', day: 'numeric'})

    
    return (
        <>
            <NavBar />

            < CollectionModal isOpen={isOpen} updateOpen={() => setIsOpen(false)}>
                    
                < SearchBar placeHolder="search collection by name" />

                <p className='py-2 text-gray-500 text-sm'>{`${photoNotInCollections.length} matches`}</p>

                <div className='mt-2'>
                    {
                        photoNotInCollections.map((collection) => (
                            < CollectionItem collection={collection} onClick={addPhotoToCollection} key={collection.id} text={"Add to collection"} icon={addIcon} />
                        ))
                    }
                </div>
                
            </CollectionModal> 

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:px-24 px-8 mt-12">
            <img src={selectedPhoto.urls.full} alt="" className="h-[44rem] object-cover" />
            <div>
                < UserInfo photo={selectedPhoto.user.profile_image.medium} 
                name={selectedPhoto.user.name} date={formattedDate} />
                
                < DetailInfo openModal={setIsOpen} />
                
                <h2 className="mt-8 font-bold text-2xl">Collections</h2>
            {
                photoInCollections.map(collection => (
                    < CollectionItem onClick={removePhotoFromCollection} collection={collection} key={collection?.id} text={"Remove"} icon={removeIcon} />
                ))
            }
            </div>

            </div>
            < Toaster />
        </>
    )
}       