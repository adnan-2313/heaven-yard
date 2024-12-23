import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  homeBanner,
  popularProperties,
  Services,
  whyUsAccordion,
} from "@/utils/constant";
import { State } from "country-state-city";
import { Search } from "lucide-react";
import Slider from "react-slick";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
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

          <div className="flex max-sm:flex-col max-sm:px-8 w-full gap-2 sm:gap-4 justify-center sm:mt-10 max-sm:my-20  ">
            <Link to="/property">
              <Button className="max-sm:h-16 ] w-full sm:w-[300px]" variant="outline" size="xl">
                Buy Property
              </Button>
            </Link>
            <Link to="/property">
              <Button className="bg-black max-sm:h-16 hover:bg-opacity-80 w-full sm:w-[300px]" variant="outline" size="xl">
                Buy Land
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <section className="mt-52 max-w-[90rem] mx-auto overflow-hidden  px-4  sm:mt-36 flex flex-col justify-center text-center">
        <div className="">
          <h1 className="text-4xl  gradient-title1 w-full sm:leading-[4rem]    font-extrabold text-blue-950 ">
            Our Popular Properties{" "}
          </h1>
        </div>
        <div className="w-full mt-10 flex max-sm:flex-col justify-end sm:mt-5 ">
          <div className="w-[280px] rounded-xl p-4 hidden sm:flex flex-col gap-1 h-[380px] bg-white shadow-cardShadow">
            <img
              src="https://www.squareyards.com/assets/images/building-img.svg"
              alt=""
              className="w-36"
            />
            <h1 className="text-xl text-start font-bold">Our Best Sellers </h1>
            <p className="text-start text-sm">
              The latest residential offerings from the best builders,
              handpicked by our team of experts just for you and backed by our
              widely acclaimed transaction and financial services.
            </p>
          </div>
          <div className="sm:w-4/6 ">
            <Slider {...settings}>
              {popularProperties.map((item) => {
                return <Card key={item.id} data={item} />;
              })}
            </Slider>
          </div>
        </div>
        <div className="mt-10 ">
          <h3 className="text-black text-3xl font-bold">
            Everything you Need at One Place
          </h3>
          <span className="text-md text-xl">In-House Services</span>
          <div className="w-full flex justify-center my-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 max-sm:gap-2 gap-4 text-center">
              {Services.map((item, index) => (
                <div
                  className="flex flex-col justify-between items-center shadow-cardShadow rounded-xl h-[150px] max-sm:h-[120px] w-[200px] max-sm:w-[150px] 
                  transition-all hover:scale-105 duration-300 hover:shadow-lg"
                  key={index}
                >
                  <img
                    src={item.img}
                    className="w-28 max-sm:w-20"
                    alt={item.title}
                  />
                  <h4 className="text-sm mb-4">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-8  flex sm:flex-row flex-col">
          <h1 className="text-black text-5xl sm:text-[6rem] mb-4 font-extrabold">
            Why US?
          </h1>
          <Accordion
            type="single"
            collapsible
            className="border mb-10 sm:w-4/5 rounded-xl shadow-cardShadow"
          >
            {whyUsAccordion.map((faq, index) => {
              return (
                <AccordionItem
                  className=" px-2 my-2 text-black   bg-opacity-20 "
                  key={index}
                  value={`item-${index + 1}`}
                >
                  <AccordionTrigger className=" ">{faq.title}</AccordionTrigger>
                  <AccordionContent className=" text-start">
                    {faq.description}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Home;
