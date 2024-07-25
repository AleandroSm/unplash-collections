import { useForm } from "react-hook-form"
import searchLogo from '../assets/Search.svg'

export const SearchBar = ({children,onSubmit, onChange ,placeHolder = "Enter you Keywords..."}) => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm()
    const inputValue = watch('search')

    const handleChange = () => {
        if(onChange) onChange(inputValue)
    }

    return (
        <form onChange={handleChange} onSubmit={handleSubmit((data) => onSubmit(data.search))} className="relative ">
        <div className="flex items-center">
        <input 
        type="text" 
        placeholder={placeHolder}
        className={`border-2 border-gray-300 rounded-lg p-4 outline-none w-80 md:w-[36rem] ${errors.search && 'border-red-600'}`}
        {...register('search', {required:true})}
        />
        <img src={searchLogo} alt="" className="absolute left-[90%] "/>
        </div>
        {/* {errors.search && <p className='text-red-600 text-sm top-20  absolute'>This field is required</p>} */}
        <div className="flex justify-center mt-12">{children}</div>
    </form>
    )
}