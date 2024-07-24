import Modal from 'react-modal'
import { SearchBar } from './SearchBar'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { CollectionItem } from './CollectionItem';
import addIcon from '../assets/Plus.svg'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPhotoToCollection, selectCollectionByName } from '../store/collections/collectionsSlice';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '80%',
    },
};

Modal.setAppElement('#root');

export const CollectionModal = ({ isOpen, updateOpen }) => {

    const { collections } = useSelector(state => state.collections)
    const { selectedPhoto } = useSelector(state => state.photos)
    const [filteredCollections, setCollections] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {
        const newCollections = collections.filter(collection => collection.photosUrls.every(url => url.slice(0,url.indexOf('?')) !== selectedPhoto.urls.regular.slice(0,selectedPhoto.urls.regular.indexOf('?'))))
        setCollections(newCollections)
    }, [])

    const onSearchCollection = (search) => {
        const newCollections = collections.filter(collection => collection.name === search)
        setCollections(newCollections)
    }

    const handleAddPhotoToCollection = (name) => {
        dispatch(selectCollectionByName(name))
        dispatch(addPhotoToCollection(selectedPhoto.urls.regular))
    }

    return (
        < Modal
            isOpen={isOpen}
            onRequestClose={updateOpen}
            style={customStyles}
        >
            <h2 className='mb-4 font-bold'>Add to collections</h2>

            < SearchBar onSubmit={onSearchCollection} />

            <p className='py-2 text-gray-500 text-sm'>{`${filteredCollections.length} matches`}</p>

            <div className='mt-4' >
                {
                    filteredCollections.map((ele) => (
                        < CollectionItem collection={ele} onClick={handleAddPhotoToCollection} key={ele.id} text={"Add to collection"} icon={addIcon} />
                    ))
                }
            </div>

        </Modal>
    )
}