const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

type CampaignKeyProps = {
  activeLetter: string[];
  inactiveLetter: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

export const CampaignKey = ({activeLetter, inactiveLetter, addGuessedLetter, disabled=false} : CampaignKeyProps) => {
  return (
    <div className="flex flex-row gap-2 mt-8 items-center justify-center">
        {KEYS.map((key) => {
        const isActive = activeLetter.includes(key);
        const isInactive = inactiveLetter.includes(key);
        return (
          <button
            className={`border-solid border-4 uppercase border-slate-700 hover:bg-slate-700 w-10 h-12 rounded-md ${
              isActive ? "bg-blue-300 hover:bg-blue-300" : ""
            } ${isInactive ? "opacity-40 hover:bg-slate-100" : ""}`}
            key={key}
            onClick={() => addGuessedLetter(key)}
            disabled={isActive || isInactive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default CampaignKey;
