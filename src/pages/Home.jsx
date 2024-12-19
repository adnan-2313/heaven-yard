import { SearchIcon } from "lucide-react";
import Header from "../components/Header";
import {
  productCards,
  crausoul,
  Filters,
  operationCards,
  serviceCards,
} from "../utils/constant";
import Card from "../components/Card";
import Marquee from "react-fast-marquee";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <main className="pt-28 sm:pt-36 max-w-8xl mx-auto text-center">
        <h1 className=" gradient-title1 text-4xl sm:text-6xl font-extrabold px-8 max-sm:px-2">
          India's Top Rated Professional Services Platform
        </h1>
        <p className="text-gray-300 text-sm sm:text-2xl mt-2 sm:mt-6 max-md:px-8">
          Connecting you with experts to simplify your legal, tax & compliance.
        </p>
        <div className="flex flex-col w-full px-10 md:px-48">
          <form className="shadow-lg  mt-4 mb-2 outline-none flex bg-white text-black w-full p-2 md:p-4 rounded-3xl">
            <input type="text" className="w-full outline-none px-2" />
            <button className="cursor-pointer">
              <SearchIcon />
            </button>
          </form>
          <div className="flex flex-wrap mt-2 md:mt-3  justify-center items-center gap-2 md:gap-4">
            {Filters.map((items, index) => {
              return (
                <button
                  key={index}
                  className="px-4 shadow-[0px_-2px_10px_rgba(0,0,0,0.2)]  py-2 rounded-3xl text-sm bg-black bg-opacity-50 hover:bg-gray-950"
                >
                  {items}
                </button>
              );
            })}
          </div>
          <div className="flex flex-col w-full gap-10 justify-center items-center mt-12">
            <h2 className="gradient gradient-title text-4xl sm:text-5xl font-extrabold px-8 max-sm:px-2">
              Our Customers
            </h2>
            <Marquee className="z-10">
              {crausoul.map((items, index) => {
                return (
                  <img
                    key={index}
                    src={items}
                    alt=""
                    className="w-36 mx-8 -z-10"
                  />
                );
              })}
            </Marquee>
          </div>
        </div>
        <div className="flex flex-wrap justify-center  mt-20 w-full px-8 gap-4">
          {serviceCards.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
        </div>

        <div className="flex flex-col justify-center  mt-20 w-full px-8 md:px-24 gap-4">
          <h1 className="gradient gradient-title text-xl sm:text-4xl font-extrabold">
            350+ Verified CA, CS, and Legal Experts Ready to Streamline Your
            Business Operations.
          </h1>
          <div className="flex flex-col gap-4 w-full justify-center items-center -z-1">
            {operationCards.map((items, index) => {
              return (
                <div
                  key={index}
                  className={`md:w-1/2 -z-1 text-start max-sm:text-sm  max-sm:text-center transition-all bg-[#151c2b] rounded-xl flex flex-row gap-2 py-8 shadow-[0px_-2px_10px_rgba(0,0,0,0.3)] px-4`}
                >
                  <img src={items.img} alt="img" className="w-24" />
                  <div className="">
                    <h3 className="font-semibold gradient-title gradient">
                      {items.title}
                    </h3>
                    <p className="leading-tight">{items.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col  justify-center  mt-20 px-8 md:px-24 gap-4">
          <h1 className="gradient-title1  text-3xl md:text-5xl ">
            Our Free Product Suite Trial
          </h1>
          <p className="text-blue-700 text-xl mb-10">
            Increase efficiency and productivity with our scalable solutions
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            {productCards.map((items) => {
              return <LargeCard key={items.key} data={items} />;
            })}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
