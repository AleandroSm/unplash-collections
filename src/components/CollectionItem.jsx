
export const CollectionItem = ({collection, text,icon, onClick}) => {
    return (
        <div className='flex items-center gap-4 hover:bg-gray-300 rounded-xl relative 
        ' onClick={() => onClick(collection.name)}>
            <img src={collection.photosUrls} alt="" className='w-24 h-24 rounded-lg py-3 pl-2 ' />
            <div>
                <p className='font-bold'>{collection.name}</p>
                <span className="text-sm">{`${collection.photosUrls.length} Photos`}</span>
            </div>
        
            <div className=" ml-[15%] w-[50%] gap-2 flex justify-end">
                <img src={icon} alt="icon" className=""/>
                <span className="text-sm font-semibold">{text}</span>
            </div>
        </div>
    )
}
