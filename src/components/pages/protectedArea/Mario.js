import marioVideo from "../../../assets/videos/marioVideo.mp4";

export default function Mario() {
  return (
    /*inserire una funzion eper cancellare nazabotdallocal storage */
    <div className="flex justify-center items-center h-screen w-screen backMario">
      <video controls muted autoPlay className="h-5/6 w-10/12 sm:w-auto">
        <source src={marioVideo} type="video/mp4" />
      </video>
    </div>
  );
}
