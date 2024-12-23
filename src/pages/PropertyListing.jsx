import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { BarLoader, SyncLoader } from "react-spinners";
import { getProperty } from "@/api/apiProperty";
import useFetch from "@/hook/useFetch";
import { locality, priceList } from "@/utils/constant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import PropertyCard from "@/components/PropertyCard";

const PropertyListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const { isLoaded, user } = useUser();

  const {
    fn: fnProperty,
    data: dataProperty,
    loading: loadingProperty,
  } = useFetch(getProperty, { location, price, searchQuery });

  useEffect(() => {
    if (isLoaded) {
      // Fetch locations once user data is loaded
      fnProperty(); // Fetch properties
    }
  }, [isLoaded,location, price, searchQuery]);

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

  if (!user?.id) {
    return (
      <div className="w-full flex absolute -top-20 bg-white h-[100vh] justify-center items-center">
        <SyncLoader className="m-auto" width={"100%"} color="#36d7b7" />
      </div>
    );
  }

  return (
    <div className="mt-12 max-w-7xl mx-auto">
      {/* Page Title */}
      <h1 className="gradient-title font-extrabold text-5xl sm:text-6xl md:text-7xl text-center pb-8">
        Latest Property
      </h1>

      <form
        onSubmit={handleSearch}
        className="h-14 flex px-6 gap-2 items-center mb-3 max-sm:px-4"
      >
        <Input
          type="text"
          placeholder="Search Properties..."
          name="search-query"
          className="h-full flex-1 border-blue-950 w-[500px] px-4 text-md"
        />
        <Button type="submit" className="h-full bg-blue-950 sm:w-28 text-white">
          Search
        </Button>
      </form>

      <div className="flex flex-col sm:flex-row px-6 gap-2">
        <Select value={location} onValueChange={(value) => setLocation(value)}>
          <SelectTrigger className="bg-blue-950 max-sm:py-1 shadow-cardShadow w-full sm:w-2/3 text-white">
            <SelectValue placeholder="Filter by Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {locality.map((name,index) => (
                <SelectItem key={index} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Price Filter */}
        <Select value={price} onValueChange={(value) => setPrice(value)}>
          <SelectTrigger className="bg-blue-950 w-full max-sm:py-1 sm:w-2/3 text-white">
            <SelectValue placeholder="Filter by Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {priceList.map((item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button
          variant="destructive"
          onClick={clearFilters}
          className="w-full sm:w-1/5"
        >
          Clear Filters
        </Button>
      </div>

      {/* Property Cards */}
      {loadingProperty || loadingProperty === undefined ? (
        <BarLoader className="mt-4 mx-auto" width={"80%"} color="black" />
      ) : (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-sm:px-6">
          {dataProperty?.length ? (
            dataProperty.map((item, index) => (
              <PropertyCard key={index} item={item} />
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
