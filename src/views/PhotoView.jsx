import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { usePhoto } from "../hooks/usePhoto"

export const PhotosView = () => {
    const {query} = useParams()
    const {handleSelectPhoto} = usePhoto(query)
    const {photos} = useSelector(state => state.photos)

    
    return (
        <div className="grid grid-cols-2 md:grid-cols-auto-fit gap-4 px-4 md:px-20 py-4 ">
            {
                photos.length > 0 && photos.map((photo) => (
                    <img 
                    src={photo.urls.regular} 
                    loading="lazy"
                    alt={photo.alt_description} key={photo.id} 
                    className="  object-cover rounded-sm cursor-pointer"
                    onClick={() => handleSelectPhoto(photo)}
                    />
                    
                ))
            }
        </div>
    )
}