import plusIcon from "../assets/Plus.svg"
import downloadIcon from "../assets/downArrow.svg"
import { useModal } from "../hooks/useModal"

export const DetailInfo = ({photo}) => {

    const {handleOpenModal} = useModal()
    const handleDownloadPhoto = async () => {
        const url = photo.urls.raw.split('?')[0]
        const name = photo.slug
        const data = await fetch(url)
        const blob = await data.blob()
        const urlBlob = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = urlBlob
        a.download = name
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }

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
                onClick={handleDownloadPhoto}
            >
                <img src={downloadIcon} alt="" className="absolute left-3 top-[35%]" />
                Download
            </button>
            
        </div>
    )
}
