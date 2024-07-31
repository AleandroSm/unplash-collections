import { toast } from "react-hot-toast"
import CustomToast from "../components/Toast"

export const useToast = () => {

    const succesNotify = (message) => toast.success(message)
    const errorNotify = (message) => toast.error(message)
    const customNotify = ({name,message,image}) => {
        toast.custom((t) => (
            < CustomToast 
                t={t}
                imgSrc={image}
                name={name}
                message={message}
            />
        ))
    }

    return {
        succesNotify,
        errorNotify,
        customNotify
    }

}