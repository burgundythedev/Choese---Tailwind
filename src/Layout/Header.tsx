import logo from "../assets/images/logo.png";
import burger from "../assets/icons/hamburger.svg";
const Header = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            className=""
            src={logo}
            alt="logo-website"
            width={100}
            height={100}
          />
        </a>
        <a />
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <li>
            <a
              href="#home"
              className="fonts-montserrat leading-normal text-lg text-slate-gray"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              className="fonts-montserrat leading-normal text-lg text-slate-gray"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="fonts-montserrat leading-normal text-lg text-slate-gray"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#contact-us"
              className="fonts-montserrat leading-normal text-lg text-slate-gray"
            >
              Contact us
            </a>
          </li>
        </ul>
        <div className="hidden max-lg:block">
          <img src={burger} width={25} height={25} alt="burgermenu-logo" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
