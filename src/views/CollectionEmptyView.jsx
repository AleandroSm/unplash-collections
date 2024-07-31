

export default function CollectionEmptyView({openModal}) {
  return (
    <div className="mt-12 p-2 text-center">
        <p className="font-black text-sm md:text-base">There is still nothing to show. The collections you create will be stored here.</p>
        <button 
        className="bg-gray-200 px-14 py-3 mt-6 hover:bg-gray-400"
        onClick={openModal}
        >Create Collection</button>
    </div>
  )
}
