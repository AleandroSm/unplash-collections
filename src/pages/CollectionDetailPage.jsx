import { NavBar } from "../components/Navbar"
import { useSelector } from "react-redux"

export const CollectionDetailPage = () => {

  const {selectedCollection} = useSelector(state => state.collections)

  return (
    <>

      < NavBar /> 

      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2C593] to-[#8A3282] text-5xl mt-6 text-center">{selectedCollection.name}</h1> 
      <p className="mt-3 text-center">{`${selectedCollection.photosUrls.length} Photos`}</p>

      <div className="columns-2 px-4 gap-4 md:columns-4 md:px-20 mt-12">
            {
                selectedCollection.photosUrls.map((photo, index) => (
                    <img 
                    src={photo} 
                    alt="" key={index} 
                    className="rounded-xl cursor-pointer max-w-full mt-4"
                    />
                    
                ))
            }
        </div>
    
    </>
  )
}
