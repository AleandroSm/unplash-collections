import { BlurHashLazyPhoto } from '../components/BlurHashLazyPhoto';

export const PhotosView = ({photos, navigateToSelectecPhoto}) => {
    
    return (
        <div className="columns-2 md:columns-4 gap-4 md:px-20 px-4 ">
            {
                photos.length > 0 ? photos.map((photo) => (
                    <div className={`h-[400px] mt-4`} key={photo.id} onClick={() => navigateToSelectecPhoto(photo)}>
                        
                        < BlurHashLazyPhoto 
                            photo={photo}
                            className="rounded-lg cursor-pointer max-w-full object-cover h-full"
                        />
                        
                    </div>
                ))
                : <div className="text-red-500">No Photos</div>
            }
        </div>
    )
}