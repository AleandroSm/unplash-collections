import plusIcon from "../assets/Plus.svg"
import downloadIcon from "../assets/downArrow.svg"
import { useModal } from "../hooks/useModal"

export const DetailInfo = () => {

    const {handleOpenModal} = useModal()

    return (
        <div className="mt-6 font-bold">
            <button
                className="bg-gray-200 px-10 py-3 mr-4 text-sm relative "
                onClick={handleOpenModal}
            >
                Add to collection
                <img src={plusIcon} alt="" className="absolute inline left-3 top-[30%]" />
            </button>
            <button
                className="bg-gray-200 px-8 py-3 mt-4 md:mt-0 text-sm relative "
            >
                <img src={downloadIcon} alt="" className="absolute left-3 top-[35%]" />
                Download
            </button>
        </div>
    )
}
