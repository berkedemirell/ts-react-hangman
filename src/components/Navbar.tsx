import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isCampaign, setIsCampaign] = useState(false);
  return (
    <div className="w-full h-14 bg-gradient-to-r from-cyan-700 to-red-900 flex items-center justify-end text-xl font-mono">
      <div className="text-slate-300 flex flex-row gap-10 mr-10">
        {!isCampaign ? (
          <Link to="/campaign" onClick={() => setIsCampaign(true)}>
            Play Campaign Mode
          </Link>
        ) : (
          <Link to="/" onClick={() => setIsCampaign(false)}>
            Go to Home Page
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
