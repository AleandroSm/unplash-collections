import { Toaster, toast } from "react-hot-toast"
import CustomToast from "./Toast"
import { useSelector } from "react-redux"

export const CollectionItem = ({collection, text,icon, addItem, removeItem}) => {

    const {selectedPhoto}  = useSelector(state => state.photos)

    const customNotify = () => {
        toast.custom((t) => (
            <CustomToast 
                t={t}
                name={"photo added in"}
                message={`${collection.name} collection`}
                imgSrc={selectedPhoto.urls.regular}
            />
        ))
    }

    const updateItem = (name) => {
        if(addItem) {
            addItem(name)
            customNotify()
        }
        if(removeItem) removeItem(name)
    }

    return (
        <div className='flex items-center gap-4 hover:bg-gray-300 rounded-xl relative cursor-pointer
        ' onClick={() => updateItem(collection.name)}>
            <img src={collection.photosUrls} alt="" className='w-24 h-24 rounded-lg py-3 pl-2 ' />
            <div>
                <p className='font-bold'>{collection.name}</p>
                <span className="text-sm">{`${collection.photosUrls.length} Photos`}</span>
            </div>
        
            <div className=" ml-[15%] w-[50%] gap-2 flex justify-end">
                <img src={icon} alt="icon" className=""/>
                <span className="text-sm font-semibold">{text}</span>
            </div>
            < Toaster />
        </div>
    )
}
