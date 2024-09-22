import { HashLink as Link } from 'react-router-hash-link';
import logo from "../assets/1.png";
import { navItems } from "../constants";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/quote");
  // };

  return (
    <header className="sticky top-0 w-full py-4 flex justify-center bg-white">
      <nav className="flex justify-between items-center w-full">
        <div className="flex gap-1 justify-center items-center">
          <img src={logo} className="h-auto lg:w-[70px] w-10" />
          <p className="lg:text-2xl text-lg font-semibold">HUSTLE</p>
        </div>

        <div className="lg:flex gap-7 hidden">
          {navItems.map((nav) => {
          console.log(nav.path);
            return (
              <Link to={`${nav.path}`}  key={nav.name} className="uppercase text-base font-normal text-black">
                {nav.name}
              </Link>
            );
          })}
        </div>

        <Button className="text-white bg-primary lg:text-sm text-xs font-medium rounded-xl">
          Request For Quotes
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
