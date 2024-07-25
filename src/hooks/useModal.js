import { useDispatch } from "react-redux"
import { openModal, closeModal } from "../store/modal/modalSlice"

export const useModal = () => {

    const dispatch = useDispatch()

    const handleOpenModal = () => {
        dispatch(openModal())
    }

    const handleCloseModal = () => {
        dispatch(closeModal())
    }

    return {
        handleOpenModal,
        handleCloseModal,
    }
}