import FooterSection from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
const AppLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://www.squareyards.com/assets/images/desktop-banner.jpeg?aio=w-1366;h-560;crop";
    img.onload = () => setLoading(false);
  }, []); // Run once on component mount

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <Outlet />
      <FooterSection />
      
    </>
  );
};

export default AppLayout;
