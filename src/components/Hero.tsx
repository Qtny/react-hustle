import logo from "../assets/1.png";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex max-lg:flex-col h-full w-full justify-center gap-10">
      <div className="lg:w-1/2 flex flex-col gap-4 lg:items-start items-center justify-center lg:text-left lg:pr-24">
        <h1 className="text-4xl font-bold">
          Unlock a Passion, Side Hustle or New <span className="underline text-secondary">Profession</span>
        </h1>

        <p className="text-sm">Leading the market's best side hustling market and bringing people closer to their dream destination</p>

        <Button className="bg-black text-white rounded-md">Get Started</Button>
      </div>

      <div className="lg:w-1/2">
        <img src={logo} className="min-w-[200px] w-full max-w-[550px]" />
      </div>
    </div>
  );
};

export default Hero;
