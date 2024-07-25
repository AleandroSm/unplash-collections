import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { usePhoto } from "../hooks/usePhoto"

export const PhotosView = () => {
    const {query} = useParams()
    const {handleSelectPhoto} = usePhoto(query)
    const {photos} = useSelector(state => state.photos)

    return (
        <div className="columns-2 md:columns-4 gap-4 md:px-20 px-4">
            {
                photos.length > 0 && photos.map((photo) => (
                    <img 
                    src={photo.urls.regular} 
                    loading="lazy"
                    alt={photo.alt_description} key={photo.id} 
                    className=" rounded-lg cursor-pointer max-w-full mt-4 block"
                    onClick={() => handleSelectPhoto(photo)}
                    />
                    
                ))
            }
        </div>
    )
}