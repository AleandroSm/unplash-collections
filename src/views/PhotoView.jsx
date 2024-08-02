import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export const PhotosView = ({photos, navigateToSelectecPhoto}) => {
    
    return (
        <div className="columns-2 md:columns-4 gap-4 md:px-20 px-4">
            {
                photos.length > 0  ?photos.map((photo) => (
                    <div className={`h-[400px]`} key={photo.id}>
                        < LazyLoadImage 
                            src={photo?.urls?.regular}
                            alt={photo?.alt_description}
                            className='rounded-lg cursor-pointer max-w-full mt-4 object-cover h-full'
                            width='100%'
                            onClick={() => navigateToSelectecPhoto(photo)}
                            effect='blur'
                            wrapperProps={{style: {transitionDelay: '200ms'}}}
                        />
                        {/* <img 
                        src={photo?.urls?.regular} 
                        loading="lazy"
                        alt={photo?.alt_description} key={photo.id} 
                        className={`rounded-lg cursor-pointer max-w-full mt-4 object-cover h-full`}
                        onClick={() => navigateToSelectecPhoto(photo)}
                        /> */}

                    </div>
                ))
                : <div className="text-red-500">No Photos</div>
            }
        </div>
    )
}