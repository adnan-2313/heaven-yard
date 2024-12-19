import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <div className="bg-gradient-to-tr  dotted-background">
      <Header />
      {/* <div className="h-[25rem] w-[8rem] inset-[10%_30%]  blur-[45px] bg-white absolute opacity-15"></div> */}
        <Home />
      </div>
    </>
  );
};

export default App;
