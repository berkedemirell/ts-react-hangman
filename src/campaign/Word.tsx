
type CampaignWord = {
  guessedLetter: string[];
  word: string;
  isLoser: boolean;
  cat?: string;
}


const Word = ({guessedLetter, word,isLoser=false} : CampaignWord) => {

  return (
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full text-3xl uppercase font-bold flex gap-6 items-center justify-center mt-6">
          {word?.split("")?.map((letter, index) => {
            return (
              <span
                className={`border-b-8 border-slate-950 w-8 h-12 text-4xl text-center ${
                  letter === " " ? "w-0 h-0 invisible" : ""
                }`}
                key={index}
              >
                <span
                  className={`${
                    guessedLetter.includes(letter) || isLoser
                      ? "visible"
                      : "hidden"
                  } ${
                    !guessedLetter.includes(letter) && isLoser
                      ? "text-red-900"
                      : ""
                  }`}
                >
                  {letter}
                </span>
              </span>
            );
          })}
        </div>
      </div>
  );
};

export default Word;
