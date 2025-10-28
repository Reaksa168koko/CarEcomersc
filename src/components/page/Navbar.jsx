import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdClose, IoMdCloseCircle } from "react-icons/io";
import { cars, menu } from "../../Data";
import { useContext, useState } from "react";
import { CartContext } from "../../CartContext";

const Navbar = () => {
  const [Opensearch, Isopensearch] = useState(false);
  const [OpenShop, Isopenshop] = useState(false);
  const { cart, removeFromCart } = useContext(CartContext);
  const [opendrop, isdrop] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter cars by model or description
  const filteredCars = cars.filter(
    (car) =>
      car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-auto bg-black">
      {/* Navbar */}
      <div className="lg:w-full lg:h-[70px] bg-black/80 backdrop:blur-md flex sticky top-0 z-50">
        {/* logo */}
        <div className="lg:w-1/3 lg:h-full w-full h-[70px] lg:p-4 flex items-center mx-3 lg:mx-3">
          <h1 className="text-white text-3xl lg:px-40">
            Auto <span className="text-rose-500">Lux</span>
          </h1>
        </div>

        {/* menu */}
        <div className="lg:w-1/3 lg:h-full lg:flex hidden justify-center items-center">
          {menu.map((p) => (
            <ul key={p.name} className="flex text-white mx-6 text-md">
              <li>
                <a href="#" className="hover:text-rose-300">
                  {p.name}
                </a>
              </li>
            </ul>
          ))}
        </div>

        {/* icons */}
        <div className="lg:w-1/3 lg:h-full flex justify-center items-center">
          <div className="flex gap-5 mx-2">
            <IoSearchOutline
              onClick={() => isdrop(!opendrop)}
              className="text-white text-2xl hover:text-red-400 cursor-pointer"
            />
            <FaRegUser
              onClick={() => Isopensearch(!Opensearch)}
              className="text-white text-2xl hover:text-red-400 cursor-pointer"
            />
            <div className="relative inline-block">
              <FiShoppingCart
                onClick={() => Isopenshop(!OpenShop)}
                className="text-white text-2xl hover:text-red-400 cursor-pointer"
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Left Sidebar (Menu) */}
      <div
        className={`lg:w-[400px] w-[80%] h-screen fixed top-0 bg-black ${Opensearch ? "translate-x-0" : "-translate-x-full"
          } transition duration-300 ease-in-out z-50`}
      >
        <div className="h-[70px] flex items-center justify-between bg-white">
          <h1 className="text-black text-2xl px-3">
            Auto <span className="text-rose-500">Lux</span>
          </h1>
          <IoMdClose
            onClick={() => Isopensearch(false)}
            className="text-4xl mx-2 cursor-pointer"
          />
        </div>
        <div className="h-full w-full">
          {menu.map((p) => (
            <ul key={p.name} className="flex text-white text-md">
              <li className="h-full w-full py-4 mt-2 hover:bg-amber-300 transition duration-200 ease-in-out">
                <a
                  href="#"
                  className="hover:text-rose-300 font-bold mx-3 text-2xl w-full h-full"
                >
                  {p.name}
                </a>
              </li>
            </ul>
          ))}
          <div className="mt-4 px-2">
            <button className="uppercase px-10 py-3 bg-rose-500 rounded-sm hover:bg-red-600 transition duration-200 hover:translate-y-1 hover:shadow-xl shadow-white text-white">
              reserve
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar (Cart) */}
      <div
        className={`lg:w-[400px] w-[80%] h-screen fixed top-0 bg-black ${OpenShop ? "translate-x-0" : "translate-x-full"
          } right-0 transition duration-300 ease-in-out z-50`}
      >
        <div className="h-[70px] flex items-center justify-between bg-white">
          <h1 className="text-black text-2xl px-3">
            Your <span className="text-rose-500">Order</span>
          </h1>
          <IoMdClose
            onClick={() => Isopenshop(false)}
            className="text-4xl mx-2 cursor-pointer"
          />
        </div>
        <div className="p-3 space-y-3">
          {cart.length === 0 ? (
            <p className="text-gray-400 text-center mt-4">
              Your cart is empty.
            </p>
          ) : (
            cart.map((car, index) => (
              <div
                key={index}
                className="w-full h-[90px] flex border border-white rounded-md overflow-hidden"
              >
                <div className="w-[30%] h-full">
                  <img
                    src={car.image}
                    alt={car.model}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 px-3 mt-2">
                  <h1 className="text-white text-lg font-bold">
                    {car.model}
                  </h1>
                  <p className="text-red-500 font-semibold">${car.price}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => removeFromCart(car.id)}
                    className="text-sm font-bold text-white px-3 py-2 rounded-md bg-red-500 hover:bg-red-600 mx-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Search Bar Dropdown */}
      <div
        className={`w-full top-0 fixed z-50 flex justify-center items-center transition-all duration-400 ease-in-out ${opendrop ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div
          className="p-6 bg-white w-[80%] mt-[100px] rounded-md shadow-white shadow-2xl border-0 outline-0 flex flex-col items-start"
        >
          {/* Search Input */}
          <div className="w-full flex items-center relative">
            <input
              type="text"
              className="w-full border-0 outline-0 text-xl font-bold text-black pr-10"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IoMdCloseCircle
              onClick={() => {
                isdrop(false);
                setSearchTerm("");
              }}
              className="absolute right-0 text-3xl text-gray-600 hover:text-red-500 cursor-pointer"
            />
          </div>

          {/* Search Results */}
          {searchTerm && (
            <div className="mt-4 w-full bg-gray-100 rounded-md p-3 max-h-60 overflow-y-auto">
              {filteredCars.length > 0 ? (
                filteredCars.map((car) => (
                  <div
                  
                    key={car.id}
                    className="flex items-center gap-4 py-2 border-b border-gray-300 cursor-pointer hover:bg-gray-200 rounded-md px-2"
                    onClick={() => {
                      console.log("Selected car:", car.model);
                      isdrop(false);
                      setSearchTerm("");
                    }}
                    
                  >
                    <img
                      src={car.image}
                      alt={car.model}
                      className="w-16 h-12 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-bold text-black">{car.model}</h3>
                      <p className="text-sm text-gray-600">
                        {car.description}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 italic">
                  No matching cars found.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
