import { css } from "aphrodite";
import styles from "../utils/Animations";
import { useState } from "react";
import Questionpage from "./Questionpage";

export default function Homepage() {
  const [hideMe, setHideMe] = useState(false);

  return (
    <div
      className={
        hideMe
          ? "h-screen w-screen flex justify-center items-center backHome"
          : "h-screen w-screen overflow-hidden backHome relative"
      }
    >
      <div
        className={
          hideMe
            ? "hidden"
            : "discoDuckItalic -skew-x-12 rounded-full text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-center z-50 text-white w-4/5 bg-black bg-opacity-70"
        }
      >
        nazabot 2.0
      </div>
      <button
        className={
          hideMe
            ? "hidden"
            : "discoDuckItalic2 rounded-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl absolute top-3/4 left-2/4 -translate-x-2/4 xl:-translate-y-3/4 -translate-y-32 lg:-translate-y-full text-center z-50 text-white w-2/5 lg:w-1/4 bg-black bg-opacity-70"
        }
        onClick={() => setHideMe(true)}
      >
        ENTRA
      </button>
      {hideMe && <Questionpage />}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>{" "}
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInLeft
              )} w-full h-8 overflow-hidden text-4xl text-slate-400`
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </div>
    </div>
  );
}
