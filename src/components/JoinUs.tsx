import { slideRight, slideUp } from "@/utils/animate";
import joinUsLogo from "../assets/4.png";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const JoinUs = () => {
  return (
    <section id="join-us" className="flex max-md:flex-col gap-8 pt-24">
      <motion.img initial={slideRight.initial} whileInView={slideRight.animate} src={joinUsLogo} className="h-auto w-full min-w-[235px] max-w-[600px] pb-28 md:pt-28" />

      <div className="flex flex-col gap-8 justify-center md:text-left">
        <motion.p initial={slideUp.initial} whileInView={slideUp.animate} className="uppercase text-base text-black font-normal">
          Tech Addicts
        </motion.p>

        <motion.h1 initial={slideUp.initial} whileInView={slideUp.animate} className="font-bold text-3xl xl:text-5xl">
          They really understood our <span className="underline text-secondary">Needs</span>
        </motion.h1>

        <motion.div initial={slideUp.initial} whileInView={slideUp.animate}>
          <Button className="">More News</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUs;
