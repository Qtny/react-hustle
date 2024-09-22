import { slideUp } from "@/utils/animate";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { LoremIpsum } from "lorem-ipsum";
import designToolImage from "../assets/3.png";

const DesignTools = () => {
  const lipsum = new LoremIpsum({
    wordsPerSentence: {
      min: 6,
      max: 7,
    },
  });

  const content = [
    {
      title: "Design Tool",
      description: lipsum.generateSentences(1),
    },
    {
      title: "Design Tool",
      description: lipsum.generateSentences(1),
    },
  ];
  return (
    <section id="design-tools" className="flex max-md:flex-col gap-10 md:my-10 pt-24">
      <div className="flex flex-col gap-10 w-full md:w-1/2 md:text-left">
        <motion.h1 initial={slideUp.initial} whileInView={slideUp.animate}  className="font-bold text-3xl">
          Design is not what it looks like and feels like. Design is how <span className="text-secondary underline">It Works</span>
        </motion.h1>

        <motion.div initial={slideUp.initial} whileInView={slideUp.animate} >
          <Button>Get Me Started</Button>
        </motion.div>

        <motion.div initial={slideUp.initial} whileInView={slideUp.animate}  className="flex gap-8 max-md:px-3">
          {content.map((c, index) => {
            return (
              <div key={`design_tool_${index}`} className="flex flex-col gap-3 w-1/2">
                <h4 className="text-[18px] font-semibold">{c.title}</h4>
                <p className="text-base">{c.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>

      <motion.div initial={slideUp.initial} whileInView={slideUp.animate}  className="md:w-1/2 flex items-center justify-center">
        <motion.img src={designToolImage} className="min-w-[260px] h-auto w-full max-w-[600px]" />
      </motion.div>
    </section>
  );
};

export default DesignTools;
