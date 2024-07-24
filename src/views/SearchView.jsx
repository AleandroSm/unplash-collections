import heroLeft from '../assets/hero-left.png';
import heroRight from '../assets/hero-right.png';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';

export const SearchView = () => {
    const navigate = useNavigate()
    const onSearchPhotos = (query) => {
        navigate(`search/${query}`)
    }
    return (
        <main className='md:grid grid-cols-4 gap-8 '>
            <div className='mt-12 hidden md:block'>
                <img src={heroLeft} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center gap-4 col-span-2 '>
            <h1 className='text-4xl font-bold'>Search</h1>
            <p>Search high-resolution images from Unsplash</p>
            < SearchBar onSubmit={onSearchPhotos} />
            </div>
            <div className='mt-12 hidden md:block'>
                <img src={heroRight} alt="" />
            </div>
        </main>
    )
}