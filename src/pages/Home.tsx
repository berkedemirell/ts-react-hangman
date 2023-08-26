import { useCallback, useEffect, useState } from "react";
// import wordsList from "./wordList.json";
import "../index.css";
import HangmanDrawing from "../components/HangmanDrawing";
import HangmanWord from "../components/HangmanWord";
import Keyboard from "../components/Keyboard";
import { deneme } from "../data/denene";

const Home = () => {
    const getWord = () => {
        const randomNum = Math.floor(Math.random() * deneme.length);
        setCat(deneme[randomNum]?.cat);
        const randomNum2 = Math.floor(
          Math.random() * deneme[randomNum].words.length
        );
        return deneme[randomNum]?.words[randomNum2];
      };
    
      const [cat, setCat] = useState<string>("");
      const [word, setWord] = useState(getWord);
      const [guessedLetter, setGuessedLetter] = useState<string[]>([]);
    
      const incorrectLetters = guessedLetter.filter(
        (letter) => !word.includes(letter)
      );
    
      const isLoser = incorrectLetters.length >= 6;
      const checkWinner = () => {
        if (word.split("").includes(" ")) {
          const newWord = word.split(" ").join("");
          return newWord
            .split("")
            .every((letter) => guessedLetter.includes(letter));
        } else {
          return word.split("").every((letter) => guessedLetter.includes(letter));
        }
      };
    
      const isWinner = checkWinner();
    
      const addGuessedLetter = useCallback(
        (letter: string) => {
          if (guessedLetter.includes(letter) || isLoser || isWinner) return;
    
          setGuessedLetter((currentLetter) => [...currentLetter, letter]);
        },
        [guessedLetter, isLoser, isWinner]
      );

      const getANewWord = () => {

        setGuessedLetter([])
        setWord(getWord());
      }

    
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
      }, [guessedLetter, addGuessedLetter]);
    
      useEffect(() => {
        const handler = (e: KeyboardEvent) => {
          const key = e.key;
          if (key !== "Enter") return;
          e.preventDefault();
          setGuessedLetter([]);
          setWord(getWord());
        };
    
        document.addEventListener("keypress", handler);
    
        return () => {
          document.removeEventListener("keypress", handler);
        };
      }, [guessedLetter, addGuessedLetter]);
  return (
    <div className="w-full flex flex-col gap-1 ml-auto mr-auto items-center font-mono bg-red-200 p-2">
        <h4 className="text-3xl mt-4 ssm:text-2xl text-mono uppercase">Category: {cat}</h4>
        <div className="text-3xl text-center mt-2 font-mono ssm:text-2xl">
          {isWinner && <button onClick={getANewWord}>"Winner! - Press enter to get a new word."</button>}
          {isLoser && <button onClick={getANewWord}>"You lost. Try Again ❤"</button>}
        </div>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord
          guessedLetter={guessedLetter}
          word={word}
          reveal={isLoser}
          cat={cat}
        />
        <Keyboard
          disabled={isLoser || isWinner}
          activeLetter={guessedLetter.filter((letter) => {
            return word.includes(letter);
          })}
          inactiveLetter={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
  )
}

export default Home