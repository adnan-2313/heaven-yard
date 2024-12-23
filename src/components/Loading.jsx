import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-screen bg-white w-full flex flex-col text-black justify-center text-xl items-center">
      <RingLoader size={80} color="black" />
    </div>
  );
};

export default Loading;
