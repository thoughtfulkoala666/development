export default function CartItem (props) {
const {item, addtocart, removefromcart} = props;
console.log("item", item)
  return(
  <div className="flex flex-row justify-between items-center px-2">
    <p className="text-2xl">{item.name}</p>
    <div className="flex justify-center items-center">
      <button onClick={(e)=> removefromcart(item)} className="bg-sky-600 hover:bg-sky-400 hover:shadow-lg active:bg-sky-800  transition-colors duration-100 text-neutral-100 rounded-lg w-10 p-2 m-2">-</button>
      <p className="text-2xl">{item.quantity}</p>
      <button onClick={(e)=> addtocart(item)} className="bg-sky-600 hover:bg-sky-400 hover:shadow-lg active:bg-sky-800  transition-colors duration-100 text-neutral-100 rounded-lg p-2 w-10 m-2">+</button>
    </div>
  </div>
  )
}