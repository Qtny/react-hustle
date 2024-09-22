import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import Learn from "@/components/Learn";
import DesignTools from "@/components/DesignTools";
import Perks from "@/components/Perks";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

const RootPage = () => {
  return (
    <div className="font-roboto flex flex-col items-center justify-center w-screen">
      <Navbar />
      <Hero />
      <Learn />
      <DesignTools />
      <div className="bg-gray-100 w-full flex justify-center items-center">
        <Perks />
      </div>
      <JoinUs />
      <div className="bg-footer bg-no-repeat bg-cover bg-center w-full flex justify-center items-center">
        <Footer />
      </div>
    </div>
  );
};

export default RootPage;
