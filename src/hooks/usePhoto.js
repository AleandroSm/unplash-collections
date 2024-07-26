import { useDispatch } from "react-redux"
import { unsplashApi } from "../api/api"
import { addPhotos,selectPhoto, setLoadingPhotos } from "../store/photos/photosSlice"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export const usePhoto = (query) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {

        const getPhotos = async () => {
            try {
                const res = await unsplashApi.search.getPhotos({query:query, orientation:'landscape',perPage:20})
                if(res.status === 200){
                    dispatch(setLoadingPhotos(true))
                    dispatch(addPhotos(res.response.results))
                }                
            } catch (error) {
                console.log(error)
            } finally{
                dispatch(setLoadingPhotos(false))
            }
        }
        getPhotos()
        // unsplashApi.search.getPhotos({query:query, orientation:'landscape',perPage:20})
        // .then(response => {
        //         dispatch(loadingPhotos())
        //         dispatch(addPhotos(response.response.results))
        //     })
        //     .catch(error => console.error(error))
    }, [query])

    const handleSelectPhoto = (photo) => {
        dispatch(selectPhoto(photo))
        navigate(`/detail/${photo.id}`)
    }

    const searchPhotos = (query) => {
        navigate(`/search/${query}`)
    }

    return {handleSelectPhoto, searchPhotos}

}