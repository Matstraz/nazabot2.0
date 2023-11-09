import { css } from "aphrodite";
import styles from "../utils/Animations";
import { useState } from "react";
import Questionpage from "./Questionpage";
import invaders from "../../assets/pics/invaders.png";
import spaceShip from "../../assets/pics/spaceship.png";
import alien from "../../assets/pics/alien.png";

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
            : "discoDuckItalic -skew-x-12 rounded-full text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-center z-50 text-white w-4/5 bg-black bg-opacity-80"
        }
      >
        nazabot 2.0
      </div>
      <button
        className={
          hideMe
            ? "hidden"
            : "discoDuckItalic2 rounded-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl absolute top-3/4 left-2/4 -translate-x-2/4 xl:-translate-y-3/4 -translate-y-32 lg:-translate-y-full text-center z-50 text-white w-2/5 lg:w-1/4 bg-black bg-opacity-80 specialTranslate"
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
                styles.fadeInLeftSlow
              )} w-full overflow-hidden flex justify-around items-center pt-3`
        }
      >
        <img src={spaceShip} alt="invaders" className="w-24" />
        <img src={spaceShip} alt="invaders" className="w-24" />
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full overflow-hidden flex gap-8 mt-16`
        }
      >
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(styles.fadeInLeft)} w-full overflow-hidden flex gap-8 mt-3`
        }
      >
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : "w-full h-8 overflow-hidden text-4xl text-slate-400"
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full overflow-hidden flex gap-8 mt-5`
        }
      >
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(styles.fadeInLeft)} w-full overflow-hidden flex gap-8 mt-3`
        }
      >
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : "w-full h-8 overflow-hidden text-4xl text-slate-400"
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full overflow-hidden flex gap-8 mt-5`
        }
      >
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(styles.fadeInLeft)} w-full overflow-hidden flex gap-8 mt-3`
        }
      >
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : "w-full h-8 overflow-hidden text-4xl text-slate-400"
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full overflow-hidden flex gap-8 mt-5`
        }
      >
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(styles.fadeInLeft)} w-full overflow-hidden flex gap-8 mt-3`
        }
      >
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : "w-full h-8 overflow-hidden text-4xl text-slate-400"
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - -
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(
                styles.fadeInRight
              )} w-full overflow-hidden flex gap-8 mt-5`
        }
      >
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
        <img src={invaders} alt="invaders" className="w-12" />
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : `${css(styles.fadeInLeft)} w-full overflow-hidden flex gap-8 mt-3`
        }
      >
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
        <img src={alien} alt="invaders" className="w-12" />
      </div>
      <div
        className={
          hideMe
            ? "hidden"
            : "w-full h-8 overflow-hidden text-4xl text-slate-400"
        }
      >
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - -
      </div>
    </div>
  );
}
