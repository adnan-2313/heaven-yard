import { ChevronRightIcon } from "lucide-react";

const Card = ({ data }) => {
  console.log(data);
  const { title, img, price, service } = data;

  return (
    <div className="flex bg-[#0e1627] rounded-xl  pt-8 pb-4 w-[20rem] flex-col shadow-[0px_-2px_10px_rgba(0,0,0,0.2)]">
      <h2 className="text-2xl w-full font-bold">{title}</h2>
      <h3 className="text-xl w-full font-medium">Starting from &#8377;{price}</h3>
      <img src={img} alt="imgs" className="w-28 mx-auto my-4" />
      <ul className="flex flex-col justify-center px-8 gap-3 w-full text-start">
        {service?.map((items, index) => {
          return (
            <li className="hover:bg-[#1b2947] cursor-pointer flex justify-between rounded-xl px-4 py-2" key={index}>
              {items} <ChevronRightIcon/>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Card;
