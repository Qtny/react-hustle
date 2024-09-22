import { motion } from "framer-motion";
import { LoremIpsum } from "lorem-ipsum";
import aboutIcon from "../assets/location_icon.png";
import connectionIcon from "../assets/mail_icon.png";
import pluginIcon from "../assets/call_icon.png";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { slideUp } from "@/utils/animate";

const Perks = () => {
  const lipsum = new LoremIpsum({
    wordsPerSentence: {
      min: 16,
      max: 18,
    },
  });

  const content = [
    {
      title: "About",
      description: lipsum.generateSentences(1),
      url: aboutIcon,
    },
    {
      title: "Connection",
      description: lipsum.generateSentences(1),
      url: connectionIcon,
    },
    {
      title: "Plugin",
      description: lipsum.generateSentences(1),
      url: pluginIcon,
    },
  ];

  return (
    <section id="perks" className="flex flex-col gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 px-8 py-16 pt-24">
      {content.map((c, index) => {
        return (
          <motion.div initial={slideUp.initial} whileInView={slideUp.animate} key={`perk_${index}`}>
            <Card className="shadow-xl h-full flex flex-col">
              <CardHeader className="flex flex-col justify-center items-center gap-5">
                <img src={c.url} className="bg-black rounded-full p-2 size-12 object-contain" />
                <CardTitle>{c.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between gap-4 items-center flex-1">
                <p className="text-sm">{c.description}</p>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </section>
  );
};

export default Perks;
