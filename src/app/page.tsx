"use client";
import Method1 from "@/components/method_1";
import Method2 from "@/components/method_2";
import Quiz1 from "@/components/quiz_1";
import Quiz2 from "@/components/quiz_2";
import styles from "./page.module.css";
import Method3 from "@/components/method_3";
import Quiz3 from "@/components/quiz_3";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Zielkonflikt from "@/components/zielkonflikt";
import QuizEnd from "@/components/quiz_end";

import { useState, useEffect } from "react";
import Start from "@/components/start";
import QuizZielkonflikt from "@/components/quiz_zielkonflikt";

export default function Belegarbeit() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const componentList = [
    Start,
    Method1,
    Quiz1,
    Method2,
    Quiz2,
    Method3,
    Quiz3,
    Zielkonflikt,
    QuizZielkonflikt,
    QuizEnd,
  ];



  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const CurrentComponent = componentList[currentIndex];

  const handleNext = () => {
    if (currentIndex < componentList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleEnd = () => {
    setCurrentIndex(0);
  };

  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isLightTheme ? "light" : "dark"
    );
  }, [isLightTheme]);

  return (
    <>
      <header>
        <div className={styles.color_mode} onClick={toggleTheme}>
          {isLightTheme ? <MdDarkMode /> : <MdLightMode />}
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Belegarbeit</h1>
          <div className={styles.progress}>
            <div 
            className={styles.progress_left} 
            style={{
              flex: currentIndex / componentList.length,
            }}
            ></div>
            <div 
            className={styles.progress_right}
            style={{
              flex: 1 - currentIndex / componentList.length,
            }}
            ></div>
          </div>
        </div>
        <div className={styles.content}>
        {currentIndex === 0 ? (
            <Start start_function={handleNext} />
          ) : currentIndex === componentList.length - 1 ? (
            <QuizEnd end_function={handleEnd} />
          ) : (
            <CurrentComponent />
          )}
        </div>
        {currentIndex !== 0 && currentIndex !== componentList.length - 1 && (
          <div className={styles.footer}>
            <button
              className={styles.button}
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              Zurück
            </button>
            <button
              className={styles.button}
              onClick={handleNext}
              disabled={currentIndex === componentList.length - 1}
            >
              Weiter
            </button>
          </div>
        )}
      </main>
      </>
  );
}
