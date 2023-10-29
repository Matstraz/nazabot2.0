import { useEffect, useState } from "react";

export default function Questionpage() {
  const [hideMe2, setHideMe2] = useState(false);
  const [answer, setAnswer] = useState("myAnswer");
  const [question, setQuestion] = useState("");

  function inputHandle(e) {
    setQuestion(e.target.value);
  }

  function answerMe(e) {
    e.preventDefault();
    setHideMe2(true);
  }

  useEffect(() => {
    question.includes("nino") && setAnswer(" CONTIENE NINONE");
    /* question.includes("nino") && setAnswer("contiene NINONE");  */
    /* question.includes("nino") && setAnswer("contiene NINONE");  */
    /* question.includes("nino") && setAnswer("contiene NINONE");  */
    /* question.includes("nino") && setAnswer("contiene NINONE");  */
    /* question.includes("nino") && setAnswer("contiene NINONE");  */
    /* question.includes("nino") && setAnswer("contiene NINONE");  */
    /* question.includes("nino") && setAnswer("contiene NINONE");  */
  }, [question]);

  return (
    <div className="w-full flex-col justify-center items-center">
      <form
        className={
          hideMe2
            ? "hidden"
            : "flex flex-col gap-6 w-full justify-center items-center"
        }
      >
        <input
          type="text"
          className="bg-blue-900 text-slate-200 w-3/4 border-blue-700 placeholder-slate-300 text-center"
          placeholder="INTERROGAMI SU UN GIOCATORE"
          value={question}
          onChange={inputHandle}
        ></input>
        <input
          type="submit"
          value="INVIA"
          onClick={answerMe}
          className="cursor-pointer crackMan text-2xl sm:text-3xl bg-blue-900 text-slate-200 w-1/4 sm:w-1/5 border border-blue-700"
        />
      </form>
      <div
        className={
          !hideMe2
            ? "idden"
            : "flex flex-col gap-6 w-full justify-center items-center"
        }
      >
        <div
          className={
            !hideMe2
              ? "hidden"
              : "bg-blue-900 text-slate-200 w-3/4 border-blue-700 placeholder-slate-300 text-center text-xl silkWorm py-2"
          }
        >
          {answer}
        </div>
        {/* settare reset */}
        <button
          className={
            !hideMe2
              ? "hidden"
              : "cursor-pointer crackMan text-2xl sm:text-3xl bg-blue-900 text-slate-200 w-4/5 sm:3/5 lg:w-2/5 border border-blue-700"
          }
        >
          FAI UN'ALTRA DOMANDA
        </button>
      </div>
    </div>
  );
}
