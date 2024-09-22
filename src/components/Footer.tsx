import { Button } from "./ui/button";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-10 w-full pb-8">
      <div className="space-y-2">
        <h1 className="text-[30px] font-bold">Join Us</h1>
        <p className="text-base font-normal">Get 20% off per order</p>
      </div>

      <div className="space-y-4">
        <Button className="w-fit">Subscribe</Button>
        <div className="flex gap-2 justify-center items-center">
          <FaFacebook className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
