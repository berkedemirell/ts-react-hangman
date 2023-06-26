import { useState, useCallback, useEffect } from "react";
import word from "../data/campaignQ";
import CampaignHang from "./CampaignHang";
import CampaignKey from "./CampaignKey";
import Word from "./Word";

const Campaign = () => {
  const [wordCounter, setWordCounter] = useState<number>(0);
  const [catCounter, setCatCounter] = useState<number>(0);
  const [levelCounter, setLevelCounter] = useState<number>(0);
  const [wordd, setWordd] = useState<string>("");
  const [cat, setCat] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [guessedLetter, setGuessedLetter] = useState<string[]>([]);
  const getCord = useCallback(() => {
    if (catCounter < 4) {
      if (wordCounter < 2) {
        setWordCounter((prev) => prev + 1);
      } else if (wordCounter === 2) {
        setWordCounter(0);
        setCatCounter((prev) => prev + 1);
      }
    } else {
      setCatCounter(0);
      setWordCounter(0);
      setLevelCounter((prev) => prev + 1);
    }
  }, [wordCounter, catCounter]);

  const incorrectLetters = guessedLetter.filter(
    (letter) => !wordd?.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;

  const checkWinner = () => {
    if (wordd?.split("")?.includes(" ")) {
      const newWord = wordd?.split(" ").join("");
      return newWord
        ?.split("")
        ?.every((letter) => guessedLetter?.includes(letter));
    } else {
      return wordd
        ?.split("")
        ?.every((letter) => guessedLetter?.includes(letter));
    }
  };

  const isWinner = checkWinner();

  useEffect(() => {
    setWordd(word[levelCounter]?.questions[catCounter]?.words[wordCounter]);
    setCat(word[levelCounter]?.questions[catCounter]?.cat);
    setLevel(word[levelCounter]?.level);
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      if (!isLoser) {
        setGuessedLetter([]);
        getCord();
      }
    };

    document.addEventListener("keypress", handler);

    return () => document.removeEventListener("keypress", handler);
  }, [levelCounter, catCounter, wordCounter, getCord, isLoser]);

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetter.includes(letter) || isLoser || isWinner) return;

      setGuessedLetter((currentLetter) => [...currentLetter, letter]);
    },
    [guessedLetter, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetter, addGuessedLetter, isLoser]);
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-red-400 to-red-600 relative">
      {level ? (
        ""
      ) : (
        <div className="absolute z-1 border-4 border-slate-950 p-4 top-10 text-xl font-mono bg-green-900 text-slate-200 rounded-lg">
          <p>Congrats you have completed the challenge</p>
        </div>
      )}
      <span className="text-2xl text-mono">
        {isWinner && "Winner! - Press enter to continue."}
      </span>
      {!isLoser ? (
        <CampaignHang numberOfGuesses={incorrectLetters.length} />
      ) : (
        <p className="text-3xl text-red-950">
          You Lost!!
        </p>
      )}
      <div className="flex flex-col justify-center items-center mt-4 gap-2">
        <div className="text-xl">
          <p className="uppercase">
            The Level is:{" "}
            <span className="text-2xl font-mono text-red-950">{level}</span>
          </p>
        </div>
        <div className="text-xl">
          <p className="uppercase">
            The Category:{" "}
            <span className="font-mono text-2xl text-red-950">{cat}</span>
          </p>
        </div>
      </div>
      <Word word={wordd} guessedLetter={guessedLetter} isLoser={isLoser} />
      <div className="w-full">
        <CampaignKey
          disabled={isLoser || isWinner}
          activeLetter={guessedLetter.filter((letter) => {
            return wordd?.includes(letter);
          })}
          inactiveLetter={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
};

export default Campaign;
