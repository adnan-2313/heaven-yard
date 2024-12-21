import { LocateIcon, Navigation } from "lucide-react";


const Card = ({ data }) => {
  console.log(data);
  const { title, img, price, desc,address } = data;

  return (
    <div className="flex bg-gradient-to-r from-blue-50 overflow-hidden via-blue-50 to-blue-50 rounded-xl w-[200px]   flex-col shadow-xl">
      <img src={img} alt="imgs" className="w-full hover:scale-110 transition-all  duration-500 hover:duration-500 h-32 rounded-t-xl" />
      <div className="p-4 flex flex-col gap-4 text-start">
        <h2 className="text-lg w-full font-bold">{title}</h2>
        <span className="flex text-sm"><Navigation/> {address}</span>
        <p className="text-xs">{desc}</p>
        <h3 className="text-sm w-full font-medium">
          $ {price} per sqaurefit
        </h3>
      </div>
    </div>
  );
};

export default Card;
