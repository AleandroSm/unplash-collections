import { useForm } from "react-hook-form"
import searchLogo from '../assets/Search.svg'

export const SearchBar = ({onSubmit}) => {

    const {register, handleSubmit, formState: {errors}} = useForm()
    

    return (
        <form onSubmit={handleSubmit((data) => onSubmit(data.search))} className="relative flex justify-center flex-col">
        <input 
        type="text" 
        placeholder="Enter you Keywords..." 
        
        className={`border-2 border-gray-300 rounded-lg p-4 outline-none w-80 md:w-[36rem] ${errors.search && 'border-red-600'}`}
        {...register('search', {required:true})}
        />
        <img src={searchLogo} alt="" className="absolute left-[90%]" />
        {/* {errors.search && <p className='text-red-600 text-sm top-20  absolute'>This field is required</p>} */}
    </form>
    )
}