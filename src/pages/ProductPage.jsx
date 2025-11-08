import { motion } from "framer-motion";
import Counter from "@/components/counter";
import StarIcon from "@mui/icons-material/Star";
import CheckIcon from "@mui/icons-material/Check";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { useData } from "@/contexts/APIDataContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useCount } from "@/contexts/countContext";
import { SkeletonsProduct } from "@/components/ui/skeleton";
export default function ProductPage() {
  const { id } = useParams();
  const { DataCount } = useCount();
  const { Data, loading } = useData();
  const { addToCart } = useCart();
  const Navigate = useNavigate();
  const CurrentProduct = Data.find((e) => e.id == id);
  const content = loading ? (
    <SkeletonsProduct />
  ) : (
    <motion.div
      initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto md:mt-30 mt-20 "
    >
      {/* product info */}

      <div
        className="mx-auto max-w-[80%] transition 
        duration-300 mt-25 block   mb-10 md:flex md:gap-10 md:items-start "
      >
        <div className="md:max-w-[50%]">
          <img
            src={CurrentProduct.imageCover}
            className="rounded-md 
          transition duration-300 md:h-[500px] md:w-[2000px] md:object-cover "
            alt="Product"
          />
        </div>
        <div>
          <h2 className=" mx-2 font-bold text-[45px] leading-[50px] md:line-clamp-none">
            {CurrentProduct.title}
          </h2>
          <div
            className="ml-2 flex gap-2 items-center
        mt-2 mb-6"
          >
            <div>
              <StarIcon className="text-yellow-300" />
            </div>
            <h2 className=" font-bold text-[20px]">
              {CurrentProduct.ratingsAverage}
            </h2>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              ({CurrentProduct.ratingsQuantity})
            </p>
          </div>
          <p className="text-[22px] mb-8 text-gray-700 dark:text-gray-400">
            {CurrentProduct.description}
          </p>
          <h2 className="font-bold text-[40px] mb-4">
            {CurrentProduct.price}
            <span className="text-sm font-normal text-gray-700 dark:text-gray-400">
              {" "}
              EGP
            </span>
          </h2>
          <div>
            <Counter />
          </div>
          <button
            onClick={() => {
              addToCart(CurrentProduct);
              Navigate(`/cart`);
            }}
            className="md:mx-auto md:max-w-[80%] font-semibold cursor-pointer text-[20px] w-full transition duration-300 mt-4 block max-w-sm p-2 dark:bg-gray-50 border dark:border-gray-200 rounded-lg shadow-sm dark:hover:bg-gray-200
       bg-[black]/90 mb-6 border-gray-700 hover:bg-gray-700 dark:text-gray-800 text-gray-50 "
          >
            Add To Cart
          </button>
          {/* product features */}
          <div className="m-4">
            <h2 className=" ml-4 font-bold text-[20px]">Key Features</h2>
            <div className="flex gap-2 ml-4 my-4">
              <CheckIcon className="text-green-600" />
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {CurrentProduct.category.name}
              </p>
            </div>
            <div className="flex gap-2 ml-4 my-4">
              <img
                src={CurrentProduct.brand.image}
                className="h-8 w-10"
                alt=""
              />
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {CurrentProduct.brand.name}
              </p>
            </div>
          </div>
          <hr />
          {/* features info */}
          <div className=" md:flex md:gap-4">
            <div
              className="mx-auto  md:w-[30%] max-w-[80%] transition duration-300
               mt-4  py-4 px-2 bg-gray-50 border border-gray-200 
               flex justify-center items-center flex-col 
               rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 "
            >
              <LocalShippingOutlinedIcon />
              <h2 className=" my-2 font-bold md:text-[10px]">Free Shipping</h2>
              <p className=" text-center font-normal md:text-[8px] text-gray-700 dark:text-gray-400">
                Get free shipping on all orders.
              </p>
            </div>
            <div
              className="mx-auto  md:w-[30%] max-w-[80%] transition duration-300
               mt-4  py-4 px-2 bg-gray-50 border border-gray-200 
               flex justify-center items-center flex-col 
               rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 "
            >
              <ShieldOutlinedIcon />
              <h2 className=" my-2 font-bold md:text-[10px]">
                2 Year Warranty
              </h2>
              <p className=" text-center font-normal md:text-[8px] text-gray-700 dark:text-gray-400">
                Full coverage
              </p>
            </div>
            <div
              className="mx-auto  md:w-[30%] max-w-[80%] transition duration-300
               mt-4 py-4 px-2  bg-gray-50 border border-gray-200 
               flex justify-center items-center flex-col 
               rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 "
            >
              <ReplayOutlinedIcon />
              <h2 className=" my-2 font-bold md:text-[10px]">30-Day Returns</h2>
              <p className=" text-center font-normal md:text-[8px] text-gray-700 dark:text-gray-400">
                No questions asked
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
  return <div>{content}</div>;
}
