import { useState } from "react"
import { Blurhash } from "react-blurhash"
import { LazyLoadImage } from "react-lazy-load-image-component"

export const BlurHashLazyPhoto = ({ photo,...props}) => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <>

            {!isLoaded &&
                < Blurhash
                    hash={photo.blur_hash}
                    width={'100%'}
                    height={'100%'}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            }
            
            < LazyLoadImage
                src={photo.urls.regular}
                alt={photo.alt_description}
                style={{visibility: isLoaded ? 'visible' : 'hidden'}}
                width='100%'
                onLoad={() => setIsLoaded(true)}
                {...props}
            />

        </>
    )
}
