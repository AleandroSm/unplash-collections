import trash from '../assets/trash.svg'


export const CollectionOption = ({id, removeCollection}) => {
  return (
    <div className="options invisible" id={id} onClick={removeCollection}>
    
        <img src={trash} alt="trash icon" className='p-3 w-10 bg-white cursor-crosshair rounded-full absolute top-[calc(90%-96px)] left-[calc(100%-64px)]'/>        
    
    </div>
  )
}
