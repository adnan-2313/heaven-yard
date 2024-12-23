import { getProperty } from "@/api/apiProperty";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useFetch from "@/hook/useFetch";
import { priceList } from "@/utils/constant";
import { useUser } from "@clerk/clerk-react";
import { Select, SelectTrigger } from "@radix-ui/react-select";
import { State } from "country-state-city";
import { useEffect, useState } from "react";
import { BarLoader, SyncLoader } from "react-spinners";
import { getLocation } from "@/api/apiLocation";

const PropertyListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [state, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const { isLoaded, user } = useUser();

  const {
    fn: fnProperty,
    data: dataProperty,
    loading: loadingProperty,
  } = useFetch(getProperty);

  console.log(user?.id);

  useEffect(() => {
    if (isLoaded) {
      fnProperty(); // Fetch properties when filters or user state changes
    }
  }, [isLoaded]);

  const handleSearch = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const query = formData.get("search-query");
    if (query) setSearchQuery(query);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setPrice("");
    setLocation("");
  };

  console.log(loadingProperty);

  if (!user?.id) {
    return (
      <div className="w-full flex absolute -top-20 bg-white h-[100vh] justify-center items-center">
        <SyncLoader className="m-auto" width={"100%"} color="#36d7b7" />
      </div>
    );
  }

  return (
    <div className="mt-12 max-w-7xl mx-auto">
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
        Latest Property
      </h1>
      <form
        onSubmit={handleSearch}
        className="h-14 flex px-6 flex-row w-full gap-2 items-center mb-3 max-sm:px-4"
      >
        <Input
          type="text"
          placeholder="Search Properties..."
          name="search-query"
          className="h-full flex-1 border-blue-950  w-[500px] px-4 text-md"
        />
        <Button
          type="submit"
          className="h-full bg-blue-950 sm:w-28  text-white"
          variant="blue"
        >
          Search
        </Button>
      </form>

      <div className="flex flex-col sm:flex-row px-6 gap-2">
        <Select
          className="border"
          value={state}
          onValueChange={(value) => setLocation(value)}
        >
          <SelectTrigger className=" bg-blue-950 max-sm:py-1 shadow-cardShadow w-full sm:w-2/3 text-white">
            <SelectValue placeholder="Filter by Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {State.getStatesOfCountry("IN").map(({ name }) => (
                <SelectItem key={name} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={price} onValueChange={(value) => setPrice(value)}>
          <SelectTrigger className="bg-blue-950 w-full max-sm:py-1 sm:w-2/3 text-white">
            <SelectValue placeholder="Filter by Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {priceList?.map((item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button
          className="w-full sm:w-1/5 rounded-none"
          variant="destructive"
          onClick={clearFilters}
        >
          Clear Filters
        </Button>
      </div>

      {loadingProperty || loadingProperty === undefined ? (
        <BarLoader className="mt-4 mx-auto" width={"80%"} color="black" />
      ) : (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-sm:px-6">
          {dataProperty?.length ? (
            dataProperty.map((item, index) => (
              <Card
                key={index}
                className="shadow-cardShadow hover:scale-105 transition-all hover:transition-all duration-300 hover:duration-300 hover:shadow-2xl"
              >
                <CardHeader>
                  <CardTitle className="gap-4 flex flex-col">
                    <img
                      src={item?.image}
                      alt=""
                      className="shadow-cardShadow rounded-xl w-full h-52"
                    />
                    <h1 className="text-2xl">{item?.title}</h1>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item?.details}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <h3 className="text-lg font-semibold">
                  &#8377;{item?.price} / sq ft
                  </h3>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div>No Property Found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertyListing;
