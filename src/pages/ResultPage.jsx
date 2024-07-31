import gradient from '../assets/gradiend-bg2x.png'
import { NavBar } from "../components/Navbar"
import { SearchBar } from "../components/SearchBar"
import { PhotosView } from "../views/PhotoView"
import { useSelector } from "react-redux"
import { Loader } from "../components/Loader"
import { usePhoto } from "../hooks/usePhoto"
import { useParams } from "react-router-dom"

export const ResultsPage = () => {

    const {query} = useParams()
    const {searchPhotos, handleSelectPhoto} = usePhoto(query)
    const {photos, isLoading} = useSelector(state => state.photos)
    
    return (
        <>
        < NavBar />
        <img src={gradient} alt="bg gradient" className='h-20 w-full' />
        <div className="relative -top-5 flex justify-center">
            < SearchBar onSubmit={searchPhotos} />
        </div>
        {
            !isLoading ? < PhotosView photos={photos} navigateToSelectecPhoto={handleSelectPhoto} /> : < Loader />
        }
        </>
    )
}