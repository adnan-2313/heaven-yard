import { addNewProperty, getProperty } from "@/api/apiProperty";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import useFetch from "@/hook/useFetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const AdminDashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isLoaded } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false); // New loading state for form submission

  const {
    fn: fnProperty,
    data: dataProperty,
    loading: loadingProperty,
  } = useFetch(getProperty, { location: "", price: "", searchQuery: "" });

  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    details: "",
    locality: "",
    image: null,
  });

  const { loading: loadingAddProperty, fn: fnAddProperty } =
    useFetch(addNewProperty);

  useEffect(() => {
    if (isLoaded) {
      fnProperty();
    }
  }, [isLoaded, loadingAddProperty]);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: e.target.files[0] }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: name === "price" ? value.replace(/[^0-9.]/g, "") : value,
      }));
    }
  };

  const isFormValid = () => {
    return (
      formData.title &&
      formData.price &&
      formData.details &&
      formData.locality &&
      formData.image
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true); // Start loading
    const sanitizedData = {
      ...formData,
      price: parseFloat(formData.price) || 0,
    };

    await fnAddProperty(sanitizedData);
    setIsSubmitting(false); // Stop loading

    setFormData({
      title: "",
      price: 0,
      details: "",
      locality: "",
      image: null,
    });

    setDrawerOpen(false); // Close the drawer
  };

  return (
    <div className="mt-12 max-w-7xl mx-auto">
      <h1 className="gradient-title font-extrabold text-5xl sm:text-6xl md:text-7xl text-center pb-8">
        Welcome to Admin Dashboard
      </h1>
      <div className="w-full my-4 px-4 sm:px-2">
        <Button className="w-full shadow-cardShadow h-full" size="xl">
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger className="w-full h-16 sm:h-24 border-white">
              Add A New Property
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Please Fill the Property Details</DrawerTitle>
              </DrawerHeader>
              <form
                onSubmit={handleSubmit}
                className="w-full px-4 flex flex-col gap-2"
              >
                <Input
                  type="text"
                  name="title"
                  placeholder="Enter the name of Property"
                  className="border-blue-950"
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="number"
                  name="price"
                  placeholder="Enter the price"
                  className="border-blue-950"
                  onChange={handleInputChange}
                  required
                />
                <Textarea
                  name="details"
                  placeholder="Enter the description of property"
                  className="border-blue-950"
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="text"
                  name="locality"
                  placeholder="Enter the locality"
                  className="border-blue-950"
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="border-blue-950"
                  onChange={handleInputChange}
                  required
                />
                <DrawerFooter className="flex gap-2">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                  <DrawerClose>
                    <Button className="w-full" variant="destructive">
                      Cancel
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </form>
            </DrawerContent>
          </Drawer>
        </Button>
      </div>
      {loadingProperty || loadingProperty === undefined ? (
        <BarLoader className="mt-4 mx-auto" width={"80%"} color="black" />
      ) : (
        <div className="shadow-cardShadow p-4 rounded-lg bg-[#edeffc]">
          <h1 className="gradient-title1 font-extrabold text-3xl sm:text-5xl md:text-5xl text-center pb-8">
            Properties List
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-sm:px-6">
            {dataProperty?.length ? (
              dataProperty.map((item, index) => (
                <PropertyCard key={index} item={item} isAdmin="true" />
              ))
            ) : (
              <div>No Property Found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
