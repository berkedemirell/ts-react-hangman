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
    <div className="flex gap-6 text-6xl xl:text-4xl sm:text-xl ll:text-2xl md:gap-4 ssm:gap-2 ssm:text-xl font-bold uppercase font-mono mt-10">
      {word.split("").map((letter, index) => {
        return (
          <span
            className={`border-b-8 md:border-b-4 border-slate-950 w-8 ssm:w-3 h-16 xl:w-6 ll:w-4 ll:h-8 xl:h-12 ${
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
