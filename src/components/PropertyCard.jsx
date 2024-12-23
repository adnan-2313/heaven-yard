import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPinHouseIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { BarLoader, SyncLoader } from "react-spinners";

const PropertyCard = ({ item }) => {
  const locationText = "Hyderabad, Telegana";
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending");

    emailjs
      .sendForm(
        "service_e8v76zt", // Replace with your EmailJS service ID
        "template_qdqoy0u", // Replace with your EmailJS template ID
        form.current,
        "AXFc_dU3R2JGUQL4r" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset(); // Clear form
        },
        (error) => {
          setStatus("Failed to send the message. Please try again.");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <>
      <Card className="shadow-cardShadow hover:scale-[1.005] transition-all duration-300 hover:shadow-2xl">
        <CardHeader>
          <CardTitle>
            <img
              src={item?.image}
              alt={item?.title}
              className="shadow-cardShadow rounded-xl w-full h-52"
            />
            <h1 className="text-2xl">{item?.title}</h1>
            <h3 className="text-gray-500 flex items-center py-1">
              <MapPinHouseIcon />
              {item.locality}, {locationText}
            </h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{item?.details}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <h3 className="text-lg font-semibold">
            &#8377;{item?.price} / sq ft
          </h3>
          <Button variant="outline" className="hover:bg-black hover:text-white">
            <Drawer>
              <DrawerTrigger>Enquiry</DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>
                    Fill the Enquiry Form - We'll Reach Out to You
                  </DrawerTitle>
                </DrawerHeader>
                {status === "Sending" ? (
                  <div className="flex justify-center">
                    <BarLoader color="black" width={"90%"} className="py-3" />
                  </div>
                ) : (
                  <p className="mt-2 text-center text-2xl font-bold py-2">
                    {status}
                  </p>
                )}
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="w-full px-4 flex flex-col gap-2"
                >
                  <Input
                    type="text"
                    name="user_name"
                    placeholder="Enter Your Name"
                    className="border-blue-950"
                    required
                  />
                  <Input
                    type="email"
                    name="user_email"
                    placeholder="Enter Your Email"
                    className="border-blue-950"
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder="Enter Your Query"
                    className="border-blue-950"
                    required
                  />
                  <DrawerFooter className="flex gap-2">
                    <Button type="submit">Submit</Button>
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
        </CardFooter>
      </Card>
    </>
  );
};

export default PropertyCard;
