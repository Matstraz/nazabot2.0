import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import icons from "../utils/Icons";

export default function Questionpage() {
  const [hideMe2, setHideMe2] = useState(false);
  const [hideMe104, setHideMe104] = useState(true);
  const [answer, setAnswer] = useState("DOVRESTI SCRIVERE QUALCOSAE");
  const [question, setQuestion] = useState("");
  let navigate = useNavigate();

  function inputHandle(e) {
    setQuestion(e.target.value.toUpperCase());
  }

  function answerMe(e) {
    e.preventDefault();
    /*NAVIGATE TO PROTECTED AREA*/
    if (question.includes("MARIO")) {
      localStorage.setItem("nazaBot", "nazaBot");
      navigate("/mario");
    }
    /*SHOW ANSWER*/
    setHideMe2(true);
    /*  ADD LINK TO 104 SITE */
    if (
      answer ===
      "PER EVITARE DISAMBUIGUITA' SPECIFICA IL COGNOME O UTILIZZA IL SOPRANNOME DEL GIOCATORE. SE NONOSTANTE QUESTO NON RIUSCISSI A TROVARLO, ALLORA SIGNIFICA CHE NON SA TENERE LE CARTE IN MANO E PUOI RAGGIUNGERLO A QUESTO"
    ) {
      setHideMe104(false);
    }
  }
  /*RESET*/
  function reset() {
    setHideMe2(false);
    setQuestion("");
    setAnswer("DOVRESTI SCRIVERE QUALCOSA");
    setHideMe104(true);
    localStorage.clear();
  }

  /*USEEFFECT TO SET ANSWER*/
  useEffect(() => {
    if (question === "" || question === " ") {
      setAnswer("DOVRESTI SCRIVERE QUALCOSA");
    }
    if (question.includes("SARDINA") || question.includes("SARDINA")) {
      setAnswer(
        "NINONE E' LA MASSIMA AUTORITA' IN TERMINI DI BAGHERIA E DI GOBLINS (NON RISERVERO' PAROLE PER MACACO)"
      );
    } else if (question.includes("CRIVELLO")) {
      setAnswer(
        `IL CRIVELLO, MEGLIO NOTO COME "CRIVLELO", E' UNO DEI PIU' IRRIVERENTI GICATORI DEL POOL PALERMITANO.
        NON E' IN GRADO DI IDEARE UN MAZZO E PER QUESTO SI LIMITA A COPIARE INDEGNAMENTE LE LISTE PIU' RIDICOLE SULLA RETE,
         MANTENDENSOSI UN GIOCATORE DAL LIVELLO DI PREPARAZIONE MEDIO/ALTO. COME SE NON BASTASSE, NON HA UN MINIMO DI CULTURA CINEMATOGRAFICA.`
      );
    } else {
      /* question.includes("nino") && setAnswer("contiene NINONE");  */
      setAnswer(
        "PER EVITARE DISAMBUIGUITA' SPECIFICA IL COGNOME O UTILIZZA IL SOPRANNOME DEL GIOCATORE. SE NONOSTANTE QUESTO NON RIUSCISSI A TROVARLO, ALLORA SIGNIFICA CHE NON SA TENERE LE CARTE IN MANO E PUOI RAGGIUNGERLO A QUESTO"
      );
    }
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
            ? "hidden"
            : "flex flex-col gap-6 w-full justify-center items-center"
        }
      >
        <div
          className={
            !hideMe2
              ? "hidden"
              : "bg-blue-900 text-slate-200 md:w-3/4 w-11/12 border border-blue-700 placeholder-slate-300 text-center text-xl pressStart py-2"
          }
        >
          {hideMe2 && answer}
          {/*   LINK TO 104 PAGE TO ADD JUST IN CASE OF UNKOWN PLAYER */}
          {!hideMe104 && (
            <div className="flex justify-center items-center gap-2">
              {icons.right}
              <p>
                <a
                  href="https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2023.09.permessi-legge-104-e-congedo-familiari-disabili-variazione-domanda.html"
                  className="underline"
                  onClick={() => setHideMe104(true)}
                >
                  LINK
                </a>
              </p>
              {icons.left}
            </div>
          )}
        </div>
        {/* RESET */}
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
