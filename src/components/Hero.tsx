import { slideLeftWithDelay, slideUpWithDelay } from "@/utils/animate";
import logo from "../assets/1.png";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="flex max-lg:flex-col h-full w-full justify-center gap-10">
      <div className="lg:w-1/2 flex flex-col gap-4 lg:items-start items-center justify-center lg:text-left lg:pr-24">
        <motion.h1 initial={slideUpWithDelay(0.2).initial} whileInView={slideUpWithDelay(0.2).animate} viewport={{ once: true, amount: 0.8 }} className="text-4xl font-bold">
          Unlock a Passion, Side Hustle or New <span className="underline text-secondary">Profession</span>
        </motion.h1>

        <motion.p initial={slideUpWithDelay(0.5).initial} whileInView={slideUpWithDelay(0.5).animate} viewport={{ once: true, amount: 0.8 }} className="text-sm lg:text-lg">
          Leading the market's best side hustling market and bringing people closer to their dream destination
        </motion.p>

        <motion.div initial={slideUpWithDelay(0.8).initial} whileInView={slideUpWithDelay(0.8).animate} viewport={{ once: true, amount: 0.8 }}>
          <Button className="bg-black text-white rounded-md">Get Started</Button>
        </motion.div>
      </div>

      <motion.div initial={slideLeftWithDelay(1).initial} whileInView={slideLeftWithDelay(1).animate} viewport={{ once: true, amount: 0.8 }} className="lg:w-1/2 flex w-full justify-center">
        <img src={logo} className="min-w-[200px] w-full max-w-[550px]" />
      </motion.div>
    </section>
  );
};

export default Hero;
