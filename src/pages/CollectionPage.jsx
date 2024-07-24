import { useSelector } from "react-redux"
import { NavBar } from "../components/Navbar"
import { useNavigate } from "react-router-dom"
import { selectCollectionByName } from "../store/collections/collectionsSlice"
import { useDispatch } from "react-redux"

export const CollectionPage = () => {

    const {collections} = useSelector(state => state.collections)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSelectCollection = (name) => {
        dispatch(selectCollectionByName(name))
        navigate(`/collections/${name}`)
    }

    return (
        <>
            < NavBar />
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2C593] to-[#8A3282] text-5xl mt-6 text-center">Collections</h1>
            <p className="mt-3 text-center">Explore the world through collections of beautiful <br></br> photos free to use under the <strong>Unsplash License.</strong></p>
            <div className="mt-14 grid grid-cols-auto-fit md:px-16 gap-4">
               {
                collections.map(collection => (
                    <div key={collection.id} className="text-center">
                        <img 
                        src={collection.photosUrls} 
                        alt="" 
                        className="h-60 w-1/2 md:w-full inline-block rounded-sm object-cover cursor-pointer"
                        onClick={() => handleSelectCollection(collection.name)}
                        />
                        <h3 className="mt-3 font-bold">{collection.name}</h3>
                        <small className="text-gray-400">{`${collection.photosUrls.length} Photos`}</small>
                    </div>
                ))
               }
            </div>
        </>        
    )
}