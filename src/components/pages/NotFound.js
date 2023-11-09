import { Link } from "react-router-dom";
import errorPage from "../../assets/pics/404.jpg";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex justify-center items-center text-center text-slate-200">
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={errorPage} width={500} alt="Not found" />
        <Link
          to="/"
          className="bg-myBlue-400 border-2 border-myBlue-200 px-3 py-1 rounded-md hover:text-slate-400"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
