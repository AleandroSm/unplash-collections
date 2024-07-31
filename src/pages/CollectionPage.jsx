import { NavBar } from "../components/Navbar"
import { CollectionModal } from "../components/Modal"
import { SearchBar } from "../components/SearchBar"
import { Toaster,} from "react-hot-toast"
import { useCollection } from "../hooks/useCollection"
import { CollectionView } from "../views/CollectionView"
import CollectionEmptyView from "../views/CollectionEmptyView"
import { useModal } from "../hooks/useModal"

export const CollectionPage = () => {

    const {collections,createCollecttion, selectedCollection} = useCollection()
    const {handleOpenModal} = useModal()
    
    return (
        <div className="overflow-x-hidden">
            < NavBar />
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2C593] to-[#8A3282] text-5xl mt-6 text-center">Collections</h1>
            <p className="mt-3 text-center text-sm md:text-base">Explore the world through collections of beautiful <br></br> photos free to use under the <strong>Unsplash License.</strong></p>

            < CollectionModal >

                < SearchBar onSubmit={createCollecttion} placeHolder="name of collection">
                    <button 
                    type="submit"
                    className="bg-gray-200 px-14 py-3 text-sm"
                    >
                        Create Collection
                    </button>

                </SearchBar>
            
            </CollectionModal>

            {collections.length > 0 ?
            
            < CollectionView collections={collections} selectedCollection={selectedCollection} openModal={handleOpenModal} />
            :
            < CollectionEmptyView openModal={handleOpenModal} />
            }

            < Toaster />
        </div>        
    )
}