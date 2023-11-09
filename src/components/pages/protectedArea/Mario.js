import marioVideo from "../../../assets/videos/marioVideo.mp4";
import superMario from "../../../assets/pics/superMario.png";

export default function Mario() {
  return (
    /*inserire una funzion eper cancellare nazabotdallocal storage */
    <div className="flex justify-center items-center h-screen w-screen backMario">
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
    </div>
  );
}
