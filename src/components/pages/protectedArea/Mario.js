import marioVideo from "../../../assets/videos/marioVideo.mp4";
import superMario from "../../../assets/pics/superMario.png";
import { Link } from "react-router-dom";

export default function Mario() {
  return (
    /*inserire una funzion eper cancellare nazabotdallocal storage */
    <div className="flex justify-center items-center h-screen w-screen backMario flex-col gap-2">
      <img
        src={superMario}
        alt="Super Mario"
        className="absolute top-5 left-5 w-12 md:w-20"
      />
      <img
        src={superMario}
        alt="Super Mario"
        className="absolute top-5 right-5 w-12 md:w-20"
      />
      <img
        src={superMario}
        alt="Super Mario"
        className="absolute bottom-5 left-5 w-12 md:w-20"
      />
      <img
        src={superMario}
        alt="Super Mario"
        className="absolute bottom-5 right-5 w-12 md:w-20"
      />
      <video controls muted autoPlay className="h-5/6 w-10/12 sm:w-auto">
        <source src={marioVideo} type="video/mp4" />
      </video>
      <Link
        to="/"
        className="border-2 border-myBlue-200 px-5 py-1 rounded-md text-white bg-black bg-opacity-80 hover:text-slate-400 discoDuckItalic2"
      >
        Back to Homepage
      </Link>
    </div>
  );
}
