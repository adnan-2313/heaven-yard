import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { homeBanner, popularProperties, Services } from "@/utils/constant";
import { State } from "country-state-city";
import { Search, SearchCheckIcon } from "lucide-react";
import Marquee from "react-fast-marquee";
const Home = () => {
  return (
    <>
      <main className="max-w-8xl mx-auto text-center overflow-hidden">
        <div className="">
          <img
            src={homeBanner}
            alt=""
            className="-z-10 w-full  mx-auto h-[700px] border-b-2  md:h-[550px] absolute object-cover shadow-gray-400"
          />
        </div>
        <div className=" flex flex-col mt-28 items-center  justify-center  max-w-6xl mx-auto">
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl gradient gradient-title font-extrabold    text-white z-10">
              Discover Your Dream Home
              <br /> Perfect for You and Your Family{" "}
            </h1>
            <p className="sm:text-xl text-sm mt-5 font-medium   text-blue-900 ">
              Explore a wide range of properties. Find your ideal space with
              ease and make your home-buying journey seamless.
            </p>
          </div>

          <form
            className="px-4 mt-8 w-4/5   md:w-2/3 text-md md:text-2xl bg-opacity-10 bg-transparent items-center rounded-xl z-20 h-12 md:h-16 shadow-lg flex 
            justify-center backdrop-blur-3xl   border-white border outline-none "
          >
            <input
              placeholder=""
              className="w-full text-sm sm:text-md  bg-transparent border-none outline-none"
            />
            <button className="">
              <Search />
            </button>
          </form>
          <div className="flex w-4/5 md:w-2/3 mt-3 flex-col sm:flex-row gap-2 max-sm:px-4 bg-white  bg-opacity-10 backdrop-blur-lg rounded-xl">
            <Select
              className="backdrop-blur-2xl border-2 shadow-lg"

              // onValueChange={(value) => setLocation(value)
              // }
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="backdrop-blur-2xl bg-transparent ">
                  {State.getStatesOfCountry("IN").map(({ name }) => {
                    return (
                      <SelectItem key={name} value={name}>
                        {name}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select

            // onValueChange={(value) => setLocation(value)
            // }
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {State.getStatesOfCountry("IN").map(({ name }) => {
                    return (
                      <SelectItem key={name} value={name}>
                        {name}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Button
              className="sm:w-1/2  backdrop-blur-2xl"
              variant="destructive"
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </main>
      <section className="mt-36 px-4   sm:mt-36 flex flex-col justify-center text-center">
        <div className="">
          <h1 className=" text-7xl w-full leading-[4rem]    gradient-title1  gradient1 font-bold ">
            Best Choices
          </h1>
          <h1 className=" text-4xl w-full leading-[4rem]    font-extrabold text-blue-950 ">
            Our Popular Properties{" "}
          </h1>
        </div>

        <div className="flex justify-center  flex-wrap gap-3 mt-10">
          {popularProperties.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
        </div>
        <div className="mt-10">
          <h3 className="text-black text-3xl font-bold">
            Everything you Need at One Place
          </h3>
          <span className="text-md text-xl">In-House Services</span>
          <div className="w-full   my-10  px-4 ">
          <Marquee pauseOnHover="true" className="overflow-y-hidden py-2 ">
            {Services.map((item) => {
              return (
                <div
                  className="flex flex-col  justify-between  mx-2 shadow-lg rounded-xl h-[150px] w-[200px] 
                  transition-all hover:scale-105 duration-300 hover:shadow-lg"
                  key={item.id}
                >
                  <img src={item.img} className="w-28 mx-auto" />
                  <h4 className="text-sm mb-4">{item.title}</h4>
                </div>
              );
            })}
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
