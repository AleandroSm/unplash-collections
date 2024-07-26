
export const PhotosView = ({photos, navigateToSelectecPhoto}) => {
    
    return (
        <div className="columns-2 md:columns-4 gap-4 md:px-20 px-4">
            {
                photos.length > 0  ?photos.map((photo) => (
                    <img 
                    src={photo.urls.regular} 
                    loading="lazy"
                    alt={photo.alt_description} key={photo.id} 
                    className=" rounded-lg cursor-pointer max-w-full mt-4 block"
                    onClick={() => navigateToSelectecPhoto(photo)}
                    />
                ))
                : <div className="text-red-500">No Photos</div>
            }
        </div>
    )
}