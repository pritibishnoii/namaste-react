
import { Star } from "lucide-react"; 

const RestaurantCard = ({ restaurant }) => {


  return (
    <div
      className="border border-gray-200 rounded-2xl shadow-md overflow-hidden 
                 w-[300px] m-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"        
    >
      {/* Image */}
      <div className="w-full h-40">
        <img
          src={restaurant.imageUrl || "https://images.unsplash.com/photo-1504674900247-0877df9cc836"}
          alt={restaurant.name}
          className="w-full h-full object-cover"
          width={300}
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {restaurant.name}
        </h2>

        {/* Rating & Delivery */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-1">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium text-gray-700">
              {restaurant.avgRating}
            </span>
          </div>
          <p className="text-sm text-gray-500">
            {restaurant.deliveryTime} mins
          </p>
        </div>

        {/* Cuisines */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-1">
          {restaurant.cuisines.join(", ")}
        </p>

        {/* Cost */}
        <p className="text-sm font-medium text-gray-800 mt-2">
          ₹{restaurant.costForTwo / 100} FOR TWO
        </p>
      </div>
    </div>
  );
};






// HOC   order component
// input - ResataurantCard ==> RestaurantCardWithPromotedLabel

export  const withPromotedLabel= (RestaurantCard)=>{
  // return new inhenced component  
  return (props)=>{
    console.log(props)
      return(
        <div className="relative">
          <label className="absolute top-0 left-0 bg-black  rounded px-4  py-2 text-xs text-white z-10  ">Promoted</label>
          <RestaurantCard  {...props}/>
        </div>
      )
  }

}


export default RestaurantCard;