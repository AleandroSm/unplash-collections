

export const UserInfo = ({ photo, name, date }) => {
    return (
        <>
            <div className="flex items-center">
                <img src={photo} alt="" className="rounded-full" />
                <span className="ml-4 font-bold">{name}</span>
            </div>
            <p className="mt-6 text-gray-700 text-sm">{`Published on ${date}`}</p>
        </>
    )
}