import learnLogo from "../assets/2.png";
import { LoremIpsum } from "lorem-ipsum";
import { motion } from "framer-motion";
import { slideLeftWithDelay } from "@/utils/animate";

const Learn = () => {
  const lipsum = new LoremIpsum({
    sentencesPerParagraph: {
      max: 3,
      min: 3,
    },
    wordsPerSentence: {
      max: 12,
      min: 10,
    },
  });

  const content = [
    {
      title: "Learn by Doing",
      description: lipsum.generateParagraphs(1),
    },
    {
      title: "Learn by Researching",
      description: lipsum.generateParagraphs(1),
    },
    {
      title: "Learn by Observing",
      description: lipsum.generateParagraphs(1),
    },
  ];

  return (
    <section id="learn" className="flex flex-col gap-12 w-full pt-24">
      <div className="flex md:justify-between md:text-start">
        <h1 className="font-bold text-3xl">
          Classes to Spark Your <span className="underline text-secondary">Creativity</span>
        </h1>
        <p className="text-base max-md:hidden font-light">
          Notified to Spark your <span className="underline text-secondary">Balance</span>
        </p>
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-2 items-center justify-center gap-8">
        <motion.div
          initial={slideLeftWithDelay(0.3).initial}
          whileInView={slideLeftWithDelay(0.3).animate}
          className="flex justify-center w-full items-center"
        >
          <img src={learnLogo} className="min-w-[200px] h-auto w-full max-w-[270px]" />
        </motion.div>
        {content.map((c, index) => {
          const counter = 0.4 * (0.1 * index + 1);
          return (
            <motion.div
              initial={slideLeftWithDelay(counter).initial}
              whileInView={slideLeftWithDelay(counter).animate}
              className="flex items-center justify-center"
              key={c.title}
            >
              <div className="flex flex-col items-start gap-2 w-full max-w-[300px]">
                <img src={learnLogo} className="w-10 h-auto" alt="learn logo" />
                <h3 className="font-semibold text-sm uppercase">{c.title}</h3>
                <div className="flex gap-4">
                  <div className="w-[2px] min-h-[120px] bg-secondary"></div>
                  <p className="text-sm text-secondary text-left">{c.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Learn;
