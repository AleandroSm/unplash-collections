import addIconCollection from '../assets/Plus.svg'

export const CollectionView = ({ collections, selectedCollection, openModal }) => {
    return (
        <>
        <img 
            className="md:ml-16 hover:bg-slate-400 p-4 w-16 cursor-pointer rounded-full" 
            src={addIconCollection} alt="icon add" 
            onClick={openModal}
            />
        <div className="mt-12 grid grid-cols-auto-fit md:px-16 px-0 gap-4">
            {
                collections.map(collection => (
                    <div key={collection.id} className="text-center">
                        <img
                            src={collection.photos[0]?.urlPhoto}
                            alt={collection.photos[0]?.alt}
                            className="h-60 w-1/2 md:w-full rounded-sm object-cover cursor-pointer inline-block mr-4"
                            onClick={() => selectedCollection(collection.name)}
                            />
                        <h3 className="mt-3 font-bold">{collection.name}</h3>
                        <small className="text-gray-400">{`${collection?.photos?.length} Photos`}</small>
                    </div>
                ))
            }
        </div>
        </>
    )
}
