import addIconCollection from '../assets/Plus.svg'
import { CollectionOption } from '../components/CollectionOption'

export const CollectionView = ({ collections, selectedCollection,removeCollection,openModal }) => {

    const handleMouseEnter = (e) => {
        
        const target = document.getElementById(e.target.id)
        const options = document.getElementsByClassName('options')
        for(const option of options){
            if(option.id === target.id){
                option.classList.remove('invisible')
            }
        }
    }

    const handleMouseLeave = (e) => {
        const options = document.getElementsByClassName('options')
        for(const option of options){
            option.classList.add('invisible')
        }        
    }

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
                    <div key={collection.id} className="text-center relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                       
                       <CollectionOption id={collection.id} removeCollection={() => removeCollection(collection.name)}/>
                        <img
                            src={collection.photos[0]?.urlPhoto}
                            alt={collection.photos[0]?.alt}
                            className="h-60 w-1/2 md:w-full rounded-sm object-cover cursor-pointer inline-block mr-4"
                            onClick={() => selectedCollection(collection.name)}
                            id={collection.id}
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
