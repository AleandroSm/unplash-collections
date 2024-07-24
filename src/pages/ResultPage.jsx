import { useNavigate } from "react-router-dom"
import { NavBar } from "../components/Navbar"
import { SearchBar } from "../components/SearchBar"
import { PhotosView } from "../views/PhotoView"

export const ResultsPage = () => {

    const navigate = useNavigate()

    const onSearchPhotos = (query) => {
        navigate(`/search/${query}`)
    }

    return (
        <>
        < NavBar />
        <div className="mt-4 flex justify-center">
            < SearchBar onSubmit={onSearchPhotos} />
        </div>
        < PhotosView />
        </>
    )
}