import { CheckCircle } from "lucide-react";

const LargeCard = ({ data }) => {
  const { img, title, description, details, id } = data;
  return (
    <section
      className={`flex flex-col px-4 md:w-[40rem] rounded-xl py-8 ${
        id === 1 ? "bg-[#14213b]" : "bg-[#04070e]"
      } text-start shadow-[0px_-2px_10px_rgba(0,0,0,0.2)]`}
    >
      <img src={img} alt="" className="w-36" />
      <h1 className="text-white mt-4 text-xl sm:text-4xl w-3/4 md:leading-normal gradient-title gradient1 font-bold">
        {title}
      </h1>
      <ul className="flex gap-4 flex-col ">
        {details.map((item, index) => (
          <li key={index} className="text-md gap-2 mt-6 text-start flex  md:flex-row ">
            <CheckCircle />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LargeCard;
