import { useEffect, useState } from "react";

export default function Questionpage() {
  const [hideMe2, setHideMe2] = useState(false);
  const [answer, setAnswer] = useState("DOVRESTI SCRIVERE QUALCOSAE");
  const [question, setQuestion] = useState("");

  function inputHandle(e) {
    setQuestion(e.target.value.toUpperCase());
  }

  function answerMe(e) {
    e.preventDefault();
    if (question === "" || question === " ") {
      setAnswer("DOVRESTI SCRIVERE QUALCOSA");
    }
    setHideMe2(true);
  }

  function reset() {
    setHideMe2(false);
    setQuestion("");
    setAnswer("DOVRESTI SCRIVERE QUALCOSA");
  }

  useEffect(() => {
    if (question === "") {
      setAnswer("DOVRESTI SCRIVERE QUALCOSA");
    }
    if (question.includes("NINO") || question.includes("SARDINA")) {
      setAnswer(
        "NINONE E' LA MASSIMA AUTORITA' IN TERMINI DI BAGHERIA E DI GOBLINS (NON RISERVERO' PAROLE PER MACACO)"
      );
    } else if (question.includes("CRIVELLO")) {
      setAnswer(
        `IL CRIVELLO, MEGLIO NOTO COME "CRIVLELO", E' UNO DEI PIU' IRRIVERENTI GICATORI DEL POOL PALERMITANO.
        NON E' IN GRADO DI IDEARE UN MAZZO E PER QUESTO SI LIMITA A COPIARE INDEGNAMENTE LE LISTE PIU' RIDICOLE SULLA RETE,
         MANTENDENSOSI UN GIOCATORE DAL LIVELLO DI PREPARAZIONE MEDIO/ALTO. COME SE NON BASTASSE, NON HA UN MINIMO DI CULTURA CINEMATOGRAFICA`
      );
    } else if (question.includes("ASD")) {
      setAnswer("CONTIENE ASD");
    } else {
      /* question.includes("nino") && setAnswer("contiene NINONE");  */
      /* question.includes("nino") && setAnswer("contiene NINONE");  */
      /* question.includes("nino") && setAnswer("contiene NINONE");  */
      /* question.includes("nino") && setAnswer("contiene NINONE");  */
      /* question.includes("nino") && setAnswer("contiene NINONE");  */
      /* question.includes("nino") && setAnswer("contiene NINONE");  */
      /* question.includes("nino") && setAnswer("contiene NINONE");  */
      setAnswer(
        "NONOSTANTE LA MIA NAVIGATA ESPERIENZA, NON CONOSCO QUESTO GIOCATORE"
      );
    }
    console.log(question);
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
          className="bg-blue-900 text-slate-200 w-3/4 border-blue-700 placeholder-slate-300 text-center silkWorm"
          placeholder="NOME GIOCATORE"
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
              : "bg-blue-900 text-slate-200 w-3/4 border border-blue-700 placeholder-slate-300 text-center text-xl silkWorm py-2"
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
          onClick={reset}
        >
          FAI UN'ALTRA DOMANDA
        </button>
      </div>
    </div>
  );
}
