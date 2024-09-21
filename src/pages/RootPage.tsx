import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import Learn from "@/components/Learn";

const RootPage = () => {
  return (
    <div className="flex justify-center py-8 sm:px-24 px-4 w-screen">
      <div className="flex flex-col gap-20 w-full max-w-[1440px]">
        <Navbar />
        <Hero />
        <Learn />
      </div>
    </div>
  );
};

export default RootPage;
