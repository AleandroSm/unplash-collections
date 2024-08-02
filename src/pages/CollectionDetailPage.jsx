import { useNavigate } from "react-router-dom"
import { NavBar } from "../components/Navbar"
import { useSelector } from "react-redux"
import trashIcon from '../assets/trash.svg'
import { startDeleteCollection } from "../store/collections/thunks"
import { useDispatch } from "react-redux"

export const CollectionDetailPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {selectedCollection} = useSelector(state => state.collections)
  const navigateToDetailPhoto = (photo) => {
    navigate(`/detail/${photo.idPhoto}`)
  }

   const removeCollection = () => {
    dispatch(startDeleteCollection())
    navigate("/collections")
   } 
  
  return (
    <>
      < NavBar /> 
      <div className="grid place-content-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2C593] to-[#8A3282] text-5xl mt-6 text-center">{selectedCollection.name}</h1> 
        <div className="text-center mt-2 md:hidden" onClick={removeCollection}>
        <img src={trashIcon} alt="trash icon" className="w-6 h-6 inline-block"/>
        </div>
        <p className="mt-3 text-center">{`${selectedCollection?.photos?.length} Photos`}</p>
      </div>
      <div className="columns-2 px-4 gap-4 md:columns-4 md:px-20 mt-12">
            {
                selectedCollection.photos.map((photo, index) => (
                    <img 
                    src={photo.urlPhoto} 
                    alt={photo.alt} key={index} 
                    className="rounded-xl cursor-pointer max-w-full mt-4"
                    onClick={ () => navigateToDetailPhoto(photo)}
                    />
                    
                ))
            }
        </div>
    
    </>
  )
}
