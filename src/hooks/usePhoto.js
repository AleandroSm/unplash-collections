import { useDispatch } from "react-redux"
import { unsplashApi } from "../api/api"
import { addPhotos,selectPhoto, setLoadingPhotos } from "../store/photos/photosSlice"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export const usePhoto = (query, id = "") => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {selectedPhoto} = useSelector(state => state.photos)
    useEffect(() => {

        dispatch(setLoadingPhotos(true))
        const getPhotos = async () => {
            try {
                const res = await unsplashApi.search.getPhotos({query:query, orientation:'landscape',page:Math.floor(Math.random()*10),perPage:30})
                if(res.status === 200){
                    dispatch(addPhotos(res.response.results))
                }                
            } catch (error) {
                console.log(error)
                navigate('/error', { state: { message: error.message} });
            } finally{
                dispatch(setLoadingPhotos(false))
            }
        }
        getPhotos()
    }, [query])

    useEffect(() => {
        const getPhotosById = async () => {
            try {
                const res = await unsplashApi.photos.get({photoId:id})
                if(res.status === 200){
                    dispatch(selectPhoto(res.response))
                }
            } catch (error) {
                console.log(error)
                navigate('/error', { state: { message: error.message } });
            }
        }
        getPhotosById()
    },[id])


    const handleSelectPhoto = (photo) => {
        navigate(`/detail/${photo.id}`)
    }

    const searchPhotos = (query) => {
        navigate(`/search/${query}`)
    }

    return {handleSelectPhoto, searchPhotos, selectedPhoto}

}