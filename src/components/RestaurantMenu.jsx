
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

  const { resId } = useParams();
console.log(resId)


  return (
    <div className="w-full flex flex-col justify-center items-center p-6 ">
      <p className="text-gray-600 mb-1 text-4xl py-12 ">Welcome Back 😀😀 </p>
      <p className=" mb-1 text-xl bg-orange-600 px-8 py-2 rounded text-white">Only  Available for  ₹ 100</p>

      <div className="mt-4 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Menu Items</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="px-12 ">Dish 1 {"  "}🍟</li>
          <li className="px-12 ">Dish 2 {"  "}🥭</li>
          <li className="px-12 ">Dish 3 {"  "}🍕</li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
