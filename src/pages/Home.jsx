import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router";
import Helper from "../hooks/useHelper";

const Home = () => {
  const dataList = Helper.getListProjects({ withComponents: false });
  return (
    <>
      <div className="bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] w-full h-screen">
        <div className="text-white">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center p-4 justify-center">
            <div className="">ThreeJS Challange</div>
          </nav>
        </div>
        <br />
        <div className="container mx-auto">
          {!!dataList && dataList.length > 0 && (
            <div className="grid grid-cols-4 gap-2 mx-auto">
              {dataList.map((item, index) => (
                <Link key={index} to={`-/${item.path}`} className="w-full group overflow-hidden">
                  <div className="w-[98%] group-hover:w-full mx-auto h-48 relative">
                    <img
                      src={item.preview}
                      alt={item.preview}
                      className="group-hover:blur-xs rounded-sm w-full h-full object-cover"
                    />
                    <div className="absolute group-hover:inset-0 flex items-center justify-center">
                      <MdOutlineRemoveRedEye className="hidden group-hover:block w-5 h-5 text-white z-50" />
                    </div>
                  </div>
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
