import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import { useData } from "@/contexts/APIDataContext";
import { useCart } from "@/contexts/CartContext";

export default function HomePage() {
  const Navigate = useNavigate();
  const { Data } = useData();
  const { addToCart } = useCart();

  function FetchProductData() {
    // console.log(Data); =>>>>> ALL DATA
    return Data.map((e, i) => {
      return (
        <div
          key={Data[i].id}
          id={Data[i].id}
          className="cursor-pointer mx-auto md:mx-4 max-w-[80%] md:max-w-[25%] transition 
          duration-300 mt-4 block  bg-gray-50 mb-10
         border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100
        dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 
        md:flex md:flex-col md:justify-between"
        >
          <img
            id={Data[i].id}
            onClick={(event) => {
              const MyId = event.currentTarget.id;
              Navigate(`/productPage/${MyId}`);
            }}
            src={Data[i].imageCover}
            className="w-[90%] my-4 mx-auto rounded-md hover:scale-[1.05] 
          transition duration-300"
            alt="Product"
          />
          <div className="ml-2 flex gap-2 items-center">
            <StarIcon className="text-yellow-300" />
            <h2 className=" font-bold text-[20px]">{Data[i].ratingsAverage}</h2>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              ({Data[i].ratingsQuantity})
            </p>
          </div>
          <div
            id={Data[i].id}
            onClick={(event) => {
              const MyId = event.currentTarget.id;
              Navigate(`/productPage/${MyId}`);
            }}
            className="ml-2 "
          >
            <h2 className="line-clamp-2 font-bold text-[20px]  ">
              {Data[i].title}
            </h2>
            <p className="line-clamp-2 font-normal mb-8 text-gray-700 dark:text-gray-400">
              {Data[i].description}
            </p>
            <h2 className=" font-bold text-[20px] line-clamp-1 md:line-clamp-none">
              Brand:{" "}
              <span className=" font-normal text-[15px] text-gray-700 dark:text-gray-400">
                {Data[i].brand.name}
              </span>
            </h2>

            <h2 className="font-bold text-[30px]">
              {Data[i].price}
              <span className="text-sm font-normal text-gray-700 dark:text-gray-400">
                {" "}
                EGP
              </span>
            </h2>
          </div>
          <button
            onClick={() => {
              const MyId = Data[i].id;
              Navigate(`/cart/${MyId}`);
              addToCart(Data[i]);
            }}
            className="md:mx-auto md:max-w-[80%] font-semibold cursor-pointer text-[20px] w-full transition duration-300 mt-4 block max-w-sm p-2 dark:bg-gray-50 border dark:border-gray-200 rounded-lg shadow-sm dark:hover:bg-gray-200
       bg-[black]/90 mb-6 border-gray-700 hover:bg-gray-700 dark:text-gray-800 text-gray-50 "
          >
            Add To Cart ({Data[i].quantity})
          </button>
        </div>
      );
    });
  }
  function CategoriesData() {}
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto md:mt-30 mt-20 "
    >
      {/* landing */}
      <div
        className=" md:h-100 mt-25 w-[80%] mx-auto md:max-w-[80%] transition 
     duration-300  block max-w-sm  bg-gray-50 md:flex md:justify-center md:items-center md:flex-col
     border border-gray-200 rounded-lg shadow-sm
     dark:bg-gray-800 dark:border-gray-700 "
      >
        <h1 className=" pl-2 pt-2 text-[50px] leading-[60px] text-center font-bold text-[20px]">
          Discover Premium Products
        </h1>
        <p className="pt-4 mb-4 pl-2 text-[30px] leading-[45px] text-center font-normal text-gray-700 dark:text-gray-400">
          Shop the latest gadgets and accessories with fast shipping and
          excellent customer service
        </p>
      </div>

      {/* selectors */}
      <div className="md:flex md:justify-between md:items-center">
        <div className="flex flex-col gap-1 mx-10 my-10 ">
          <h1 className=" font-bold text-[30px]">All Products</h1>
          <p className="mb-4 text-[20px] font-normal text-gray-700 dark:text-gray-400">
            {Data.length} products Available
          </p>
        </div>
        <div>
          <form className="max-w-sm flex gap-15 md:w-full w-[80%] mx-auto">
            <label htmlFor="underline_select" className="sr-only">
              Underline select
            </label>
            {/*  */}
            <select
              id="underline_select"
              className=" block  px-0 w-[100px]text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>All Categories</option>
              <option value="US"></option>
            </select>
            {/*  */}
            <select
              id="underline_select"
              className="block px-0 w-[100px] text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>Featured</option>
              <option value="US"></option>
              <option value="CA"></option>
              <option value="FR"></option>
              <option value="DE"></option>
            </select>
          </form>
        </div>
      </div>
      {/* onClick */}
      {/* products CARDS */}
      <div className="md:mx-auto md:my-1 md:flex flex-wrap md:justify-center  ">
        <FetchProductData />
      </div>
    </motion.div>
  );
}
