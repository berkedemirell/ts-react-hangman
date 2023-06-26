type HangmanWordProps = {
  guessedLetter: string[];
  word: string;
  reveal?: boolean;
  cat?: string;
};

export const HangmanWord = ({
  guessedLetter,
  word,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <div className="flex gap-6 text-6xl font-bold uppercase font-mono mt-10">
      {word.split("").map((letter, index) => {
        return (
          <span
            className={`border-b-8 border-slate-950 w-8 h-16 ${
              letter === " " ? "w-0 h-0 invisible" : ""
            }`}
            key={index}
          >
            <span
              className={`${
                guessedLetter.includes(letter) || reveal ? "visible" : "hidden"
              } ${
                !guessedLetter.includes(letter) && reveal ? "text-red-900" : ""
              }`}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default HangmanWord;
