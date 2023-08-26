import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="font-mono flex flex-row items-center justify-center gap-96 ssm:gap-40 bg-gradient-to-r from-slate-600 to-slate-800 h-fit">
      <div className="">
        <p className="p-6 text-xl">
          <Link
            to="https://www.youtube.com/watch?v=-ONUyenGnWw&ab_channel=WebDevSimplified"
            target="_blanked"
            className="hover:text-slate-200 duration-500 text-"
          >
            Source
          </Link>
        </p>
      </div>
      <div className="p-6 flex flex-col text-xl">
        <Link
          to="https://www.linkedin.com/in/berke-demirel/"
          className="hover:text-slate-200 transition-all duration-300"
          target="_blanked"
        >
          Linkedin
        </Link>
        <Link
          to="https://github.com/berkedemirell"
          className="hover:text-slate-200 transition-all duration-300"
          target="_blanked"
        >
          Github
        </Link>
      </div>
    </div>
  );
};

export default Footer;
