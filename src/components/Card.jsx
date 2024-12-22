import { LocateIcon, Navigation } from "lucide-react";
import { Button } from "./ui/button";

const Card = ({ data }) => {
  const { title, img, price, desc, address } = data;

  return (
    <div className="flex bg-white max-sm:w-[250px] overflow-hidden mx-1  relative rounded-xl mb-2 h-[380px]  flex-col shadow-cardShadow">
      <img
        src={img}
        alt="imgs"
        className="h-full group-hover:scale-125 w-full absolute hover:scale-125 duration-300  transition-all    rounded-t-xl"
      />
      <div className="z-10 mt-60  backdrop-blur-md   text-white group p-4 flex flex-col gap-4 text-start">
        <h2 className="text-lg w-full font-bold">{title}</h2>
        <span className="flex text-sm ">
          <Navigation /> {address}
        </span>
        {/* <p className="text-xs">{desc}</p> */}
        {/* <Button variant="outline" className="group-hover:h-[30px] transition-transform group-hover:flex hidden  h-0">Enquiry</Button> */}
        <h3 className="text-sm w-full font-medium">$ {price} per sqaurefit</h3>
      </div>
    </div>
  );
};

export default Card;
