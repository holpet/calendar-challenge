import { logo_grad, logo_grad2 } from "../../../assets/img";

const Logo = () => {
  return (
    <a href="/" className="relative mr-4 text-center">
      <img
        src={logo_grad2}
        alt="calendar"
        className="mr-2 min-w-icon-big absolute opacity-0 hover:opacity-100 scale-105 transition-all"
      />
      <img
        src={logo_grad}
        alt="calendar"
        className="mr-2 min-w-icon-big transition-all"
      />
    </a>
  );
};

export default Logo;
