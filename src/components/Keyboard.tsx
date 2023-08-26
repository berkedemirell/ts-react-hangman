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

type KeyboardProps = {
  activeLetter: string[];
  inactiveLetter: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

export const Keyboard = ({
  activeLetter,
  inactiveLetter,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) => {
  return (
    <div className="grid grid-cols-12 md:grid-cols-8 gap-2 mt-8 mb-24">
      {KEYS.map((key) => {
        const isActive = activeLetter.includes(key);
        const isInactive = inactiveLetter.includes(key);
        return (
          <button
            className={`border-solid border-4 uppercase border-slate-700 hover:bg-slate-700 md:w-10 md:h-10 ssm:w-8 ssm:h-8 w-12 h-12 rounded-md ${
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

export default Keyboard;
