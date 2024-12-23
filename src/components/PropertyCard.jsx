import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { MapPinHouseIcon } from "lucide-react";

const PropertyCard = ({ item }) => {

   
    const locationText = "Hyderabad,Telegana"
  
    return (
      <Card className="shadow-cardShadow hover:scale-105 transition-all duration-300 hover:shadow-2xl">
        <CardHeader>
          <CardTitle>
            <img
              src={item?.image}
              alt={item?.title}
              className="shadow-cardShadow rounded-xl w-full h-52"
            />
            <h1 className="text-2xl">{item?.title}</h1>
            <h3 className="text-gray-500 flex items-center py-1"><MapPinHouseIcon/>{item.locality},{locationText}</h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{item?.details}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <h3 className="text-lg font-semibold">&#8377;{item?.price} / sq ft</h3>
        </CardFooter>
      </Card>
    );
  };

  export default PropertyCard