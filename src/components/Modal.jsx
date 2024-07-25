import Modal from 'react-modal'
import { useSelector } from 'react-redux';
import { useModal } from '../hooks/useModal';

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

export const CollectionModal = ({ children }) => {

    const {isOpen} = useSelector(state => state.modal)
    const {handleCloseModal} = useModal()

    return (
        < Modal
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            style={customStyles}
        >
            <h2 className="text-center mb-4 font-bold">Add to Collection</h2>
            
            <div>{children}</div>

        </Modal>
    )
}