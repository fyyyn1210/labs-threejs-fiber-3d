import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router";
import Helper from "../hooks/useHelper";
import {motion} from "framer-motion";

const Home = () => {
  const variantCard = {
    hover: { scale: 1.02 },
    play:{ type: "spring", stiffness: 400, damping: 10 }
  }
  const dataList = Helper.getListProjects({ withComponents: false });
  return (
    <>
      <div className="bg-[#111827] w-full h-screen">
        <div className="text-white">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center p-4 justify-center">
            <div className="">ThreeJS Challange</div>
          </nav>
        </div>
        <br />
        <div className="w-full mx-auto px-10">
          {!!dataList && dataList.length > 0 && (
            <div className="grid grid-cols-4 gap-2 mx-auto">
              {dataList.map((item, index) => (
                <Link key={index} to={`-/${item.path}`} className="w-full group overflow-hidden border rounded-md bg-[#1f2937] border-[#828996]">
                  <motion.div
                  variants={variantCard}
                  whileHover="hover"
                  transition="play"
                  className="w-full mx-auto h-48 relative">
                    <img
                      src={item.preview}
                      alt={item.preview}
                      className="group-hover:blur-xs w-full h-full object-cover"
                    />
                    <div className="absolute group-hover:inset-0 flex items-center justify-center">
                      <MdOutlineRemoveRedEye className="hidden group-hover:block w-5 h-5 text-white z-50" />
                    </div>
                  </motion.div>
                  <motion.div
                  variants={variantCard}
                  whileHover="hover"
                  transition="play"
                   className="p-4 mx-auto text-gray-500 group-hover:text-gray-300 font-semibold"
                   >
                    {item.title}
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
