import { Button } from '@mui/material';

export default function BakeryItem(props) {

  return (
    <div className="bakeryitem
    flex flex-col items-center
    border-2 border-neutral-800
    rounded-lg
    m-2
    p-2
    w-80
    h-[38rem]
    text-center
    shadow-lg
    bg-sky-50
    ">
    <h3 className="font-bold text-xl text-ellipsis truncate w-full">{props.name}</h3>
    <h4 className="text-lg font-bold text-gray-500">{props.artist}</h4>
    <img src={props.image} alt={props.name + " album cover"} className="w-40 h-40"></img>
    <p className="font-light text-xs pt-2 h-32">{props.description}</p>
    <div className="flex flex-row gap-x-10">
      <div>
        <p><span className="font-bold">Num Songs:</span> <br/>{props.num_songs}</p>
      </div>
      <div>
        <p><span className="font-bold">Release Date:</span> <br/>{props.release_date}</p>
      </div>
     
    </div>
    <p><b>Length (seconds):</b><br/> {props.length_in_seconds}</p>
    <div className="flex ">
      <div className='px-2'>
        <p className="font-bold ">Genres:</p>
        
        <p className="text-md italic">{props.genres.join(", ")}</p>
        
      </div>
      <div className='px-2'>
        <p className="font-bold">Color Palette:</p>
        <p className="text-md italic">{props.album_colors.join(", ")}</p>
      </div>
    </div>

      {/* <img src={props.image} alt={props.name} className="w-40 h-40 overflow-clip" />
      <h3 className="text-2xl font-bold">{props.name}</h3>  
      <p className="text-xl">{props.description}</p>
      <p className="text-xl">${props.price}</p>
      <button onClick={()=> props.addToCart(props)} className="bg-sky-600 hover:bg-sky-400 hover:shadow-lg active:bg-sky-800  transition-colors duration-100 text-neutral-100 rounded-lg p-2 m-2">Add to Cart</button> */}
      <div className="p-2 pt-4">
      {props.isFavorite ? 
        <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:blue-red-500 focus:ring-offset-2" onClick={(e) => props.removeFavorite(props.name)}>Remove From Favorites</button>
      : <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" onClick={(e) => props.addFavorite(props.name)}>Add to Favorites</button>}
      </div>
    </div>
  );
}