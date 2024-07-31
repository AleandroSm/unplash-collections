import { NavBar } from "../components/Navbar"
import addIconCollection from '../assets/Plus.svg'
import { CollectionModal } from "../components/Modal"
import { SearchBar } from "../components/SearchBar"
import { Toaster,} from "react-hot-toast"
import { useCollection } from "../hooks/useCollection"
import { useModal } from "../hooks/useModal"

export const CollectionPage = () => {

    const {collections,createCollecttion, selectedCollection} = useCollection()
    const {handleOpenModal} = useModal()
    

    return (
        <div className="overflow-x-hidden">
            < NavBar />
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2C593] to-[#8A3282] text-5xl mt-6 text-center">Collections</h1>
            <p className="mt-3 text-center text-sm md:text-base">Explore the world through collections of beautiful <br></br> photos free to use under the <strong>Unsplash License.</strong></p>
            <img 
            className="md:ml-16 hover:bg-slate-400 p-4 w-16 cursor-pointer rounded-full" 
            src={addIconCollection} alt="icon add" 
            onClick={handleOpenModal}
            />

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

            <div className="mt-12 grid grid-cols-auto-fit md:px-16 px-0 gap-4">
               {
                collections.map(collection => (
                    <div key={collection.id} className="text-center">
                        <img 
                        src={collection.photos[0]?.urlPhoto} 
                        alt={collection.photos[0]?.alt} 
                        className="h-60 w-1/2 md:w-full rounded-sm object-cover cursor-pointer inline-block mr-4"
                        onClick={() => selectedCollection(collection.name)}
                        />
                        <h3 className="mt-3 font-bold">{collection.name}</h3>
                        <small className="text-gray-400">{`${collection?.photos?.length} Photos`}</small>
                    </div>
                ))
               }
            </div>
            < Toaster />
        </div>        
    )
}