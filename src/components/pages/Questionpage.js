import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import icons from "../utils/Icons";

export default function Questionpage() {
  const [hideMe2, setHideMe2] = useState(false);
  const [hideMe104, setHideMe104] = useState(true);
  const [hideMePortfolio, setHideMePortfolio] = useState(true);
  const [answer, setAnswer] = useState("DOVRESTI SCRIVERE QUALCOSAE");
  const [question, setQuestion] = useState("");
  let navigate = useNavigate();

  function inputHandle(e) {
    setQuestion(e.target.value.toUpperCase());
  }

  function answerMe(e) {
    e.preventDefault();
    /*NAVIGATION TO PROTECTED AREA*/

    /*NAVIGATE TO MARIO PAGE*/
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
    /*  ADD LINK TO PORTFOLIO */
    if (
      answer ===
      "NON SONO IN GRADO DI FORNIRE UNN'OPINIONE CHIARA SU QUESTO GIOCATORE. PUOI TROVARE PIU' INFO"
    ) {
      setHideMePortfolio(false);
    }
  }
  /*RESET*/
  function reset() {
    setHideMe2(false);
    setQuestion("");
    setAnswer("DOVRESTI SCRIVERE QUALCOSA");
    setHideMe104(true);
    setHideMePortfolio(true);
    localStorage.clear();
  }

  /*USEEFFECT TO SET ANSWER*/
  useEffect(() => {
    if (question === "" || question === " ") {
      setAnswer("DOVRESTI SCRIVERE QUALCOSA");
    }
    if (question.includes("SARDINA") || question.includes("SARDINA")) {
      setAnswer(
        "NINONE E' LA MASSIMA AUTORITA' IN TERMINI DI BAGHERIA E DI GOBLINS."
      );
    } else if (question.includes("CRIVELLO")) {
      setAnswer(
        `IL CRIVELLO, MEGLIO NOTO COME "CRIVLELO", E' UNO DEI PIU' IRRIVERENTI GICATORI DEL POOL PALERMITANO.
        NON E' IN GRADO DI IDEARE UN MAZZO E PER QUESTO SI LIMITA A COPIARE INDEGNAMENTE LE LISTE PIU' RIDICOLE SULLA RETE,
         MANTENDENSOSI UN GIOCATORE DAL LIVELLO DI PREPARAZIONE MEDIO/ALTO. COME SE NON BASTASSE, NON HA UN MINIMO DI CULTURA CINEMATOGRAFICA.`
      );
    } else if (
      question.includes("VICIO") ||
      question.includes("VICOFEDE") ||
      question.includes("FEDERICO") ||
      question.includes("SCHILLIZZI") ||
      question.includes("IVAN")
    ) {
      setAnswer(
        `CHI GIOCA DA SEMPRE UN TIER 2 COME TONNI, PERCHE' OVVIAMENTE NON E' IN GRADO DI GIOCARE ALTRO, NON MERITA NEPPURE DI ESSERE TENUTO IN CONSIDERAZIONE.`
      );
    } else if (question.includes("BARBERA") || question.includes("BARBY")) {
      setAnswer(
        `IL BARBY E' DA POCO RIENTRATO NEL GIRO, NON CI POSSONO ASPETTARE GRANDI GESTA DA LUI.`
      );
    } else if (question.includes("ZANNA")) {
      setAnswer(
        `A TESTIMONIANZA DELLA POCA ESERIENZA CHE PRESENTA, I SUOI PROGNOSTICI SU MTG SI RIVELANO PUNTUALMENTE ERRATI. FORSE L'UNICA COSA DI CUI SI PUO' DISCUTERE O LITIGARE CON ZANNA E' IL CINEMATOGRAFO.`
      );
    } else if (question.includes("GRECO") || question.includes("GABRIELE")) {
      setAnswer(
        `HO SCOPERTO SOLO LO SCORSO MESE CHE SI CHIAMASSE GABRIELE UGO.`
      );
    } else if (question.includes("CALABRESE")) {
      setAnswer(
        `SI TRATTA DI UN GIOCATORE SALTUARIO NON DEGNO DI NOTA E, COME SE NON BASTASSE, VIENE DA BAGHERIA.`
      );
    } else if (
      question.includes("BIDDECI") ||
      question.includes("BIDDEX") ||
      question.includes("B10")
    ) {
      setAnswer(
        `IL BIDDEX SI COLLOCA FRA LA TOP 3 DEI PLAYERS PALERMITANI TUTTAVIA MANCA DI SELF CONTROL E QUESTO INCIDE NEGATIVAMENTE SULLE SUE PERFORMANCE. PER COLPA SUA NON SONO ENTRATO IN TOP 8 A CATANIA.`
      );
    } else if (
      question.includes("SERGIO") ||
      question.includes("NAPOLI") ||
      question.includes("SERGINO")
    ) {
      setAnswer(
        `SERGIO HA GIOCATO CONTROL DA SEMPRE E QUESTO HA FATTO SI CHE NON DIVENTASSE MAI UN GIOCATORE A 360 GRADI. NONOSTANTE APPREZZI IL SUO SFORZO AD APRIRSI VERSO ALTRI ORIZZONTI, LE CLASSIFICHE DEL VENERDI' SERA PARLANO CHIARO.`
      );
    } else if (question.includes("GIACALONE")) {
      setAnswer(
        `GIACALONE HA VINTO UN TORNEO DEL VENERDI' E SI E' CONVINTO DI ESSERE UN PRO PLAYER. DEVE FARNE ANCORA MOLTA DI STRADA PRIMA DI RIUSCIRE A TENERE PIU' DI TRE CARTE IN MANO SENZA CHE CADANO DA SOLE. TRE, COME I MANA CHE RIESCE A PRODURRE CON BEN TRE LANDE: QUASI FENOMENO`
      );
    } else if (
      question.includes("CIX") ||
      question.includes("PAICEN") ||
      question.includes("ZUZZI")
    ) {
      setAnswer(
        "'ZUZZI', ANCHE CONOSCIUTO COME 'PAICEN', ANCHE CONOSCIUTO COME 'CIX', E' UN GIOCATORE AMBIGUO COME I SUOI MAZZI CHE NON CONTENGONO MAI MENO DI 5 COLORI. E' IL DEGNO SOSTITUTO DI QUELLO SCALDA SCRIVANIE EMIGRATO A MILANO: IL TEMPO SI FERMA COME PER MAGIA."
      );
    } else if (question.includes("GIRESI") || question.includes("GIREX")) {
      setAnswer(
        "HO SEMPRE REPUTATO IL GIREX IL PIU' BRAVO GIOCATORE DI PALERMO...DOPO DI ME. LA SUA ECCESSIVA ATTENZIONE PER UN FORMATO RIDICOLO COME IL PAUPER HA FATTO SI' CHE PERDESSE IL FOCUS SUL VERO MAGIC. FOCUS CHE RIESCE A MANTENERE PER TUTTO TRANNE PER CHI REALMENTE HA BISOGNO QUANDO NON RIESCE AD ENTRARE IN CAMERA DI ALBERGO: VASTASO."
      );
    } else if (question.includes("CUSUMANO")) {
      setAnswer(
        "CUSUMANO CERCA INVANO DA TEMPO DI SCALARE LA CLASSIFICA BEI BEST PLAYERS PALERMITANI. LA SUA SOMIGLIANZA AL FAMOSO NONNO DEL FILM 'UP' SEMBRA TUTTAVIA NON AIUTARLO IN QUESTA RISALITA."
      );
    } else if (question.includes("GANCI")) {
      setAnswer(
        "MA UNA VOLTA DA GANCI NON SI COMPRAVANO I PEZZI DI ROSTICCERIA?"
      );
    } else if (
      question.includes("MANGICARACINA") ||
      question.includes("FILIPPO")
    ) {
      setAnswer(
        "A MAZZARA DEL VALLO NON SONO ANCORA ARRIVATE LE PENNE A SFERA, VERAMENTE VUI CONOSCERE LA MIA OPINIONE SU QUESTO INETTO ED INCAPACE GIOCATORE? BENE, ADESSO LA CONOSCI."
      );
    } else if (question.includes("BIF") || question.includes("BICA")) {
      setAnswer(
        "IN 'BACK TO THE FUTURE' E' STATO UNO DEI MIEI INTERPRETI PREFERITI. DA LOSTWOOD HA IL CHIARO PIANO MALVAGIO DI METTERMI IN CATTIVA LUCE CON IL LUFOTECARIO DI FIDUCIA"
      );
    } else if (question.includes("BOSCO")) {
      setAnswer(
        "SAREBBE PIU' PROFICUO SE BOSCO CONTINUASSE A DEDICARSI ESCLUSIVAMENTE ALL'ARBITRAGGIO."
      );
    } else if (question.includes("GIAMMANCO")) {
      setAnswer(
        "RICCARDO RICOPRE BENE IL SUO RUOLO DA TO NONOSTANTE NON MI PERMETTA DI ORGANIZZARE TORNEI DA 50€. FORSE UN TEMPO NE CAPIVA QUALCOSA DI HEARTHSTONE."
      );
    } else if (
      question.includes("VCDN") ||
      question.includes("COSTANZO") ||
      question.includes("NOBILE")
    ) {
      setAnswer(
        "MI HANNO RACCONTATO CHE UNA VOLTA FOSSE IN GRADO DI GIOCARE A MTG. DOPO IL BAN DI MOX OPAL NON E' STATO PIU' LO STESSO. HA PROVATO A TIRARSI SU CON L'ARBITRAGGIO MA CON SCARSI RISULTATI."
      );
    } else if (question.includes("BELLOMIA") || question.includes("MACACO")) {
      setAnswer(
        "MACACO CERCA INUTILMENTE DA TEMPO DI RUBARE IL PRIMATO A NINO SARDINA IN FATTO DI GOBLIN. GIOCARE A MAGIC SIGNIFICA ALTRO."
      );
    } else if (question.includes("ORLANDO")) {
      setAnswer(
        "MANFREDI E' IL CLASSICO GIOCATORE DELLA DOMENICA: MONTA ESCLUSIVAMENTE MAZZI COL BLU, NON GLI IMPORTA DI VINCERE, NON DEDICA TEMPO AL TESTING, VIENE IN SALA SOLO PER TIRARE UN PAIO DI COUNTERSPELL COSI' DA INFASTIDIRE I SUOI AVVERSARI PER POI TORNARE A CASA COMPIACIUTO DI SE STESSO."
      );
    } else if (question.includes("MANFREDI RE")) {
      setAnswer(
        "HO SENTITO DIRE IN GIRO CHE UNA VOLTA MANFREDI FOSSE UN ARBITRO DI MAGIC. A PARTE CERCARE QUALCHE RIPOSTA DI RULING SU GOOGLE, NON GLI HO MIA VISTO FARE ALTRO."
      );
    } else if (
      question.includes("MARCELLO") ||
      question.includes("MARCELLINO") ||
      question.includes("TRAPANI")
    ) {
      setAnswer("SE VUOI TI ASPETTO FUORI E TE LO FACCIO CONOSCERE.");
    } else if (question.includes("DIOMEDE")) {
      setAnswer(
        "LA GENTE DICE CHE È FORTE MA SECONDO IL MIO MODESTISSIMO PARERE NON VALE NEMMENO UNO DEI MIEI NUOVI BAFFI."
      );
    } else if (
      question.includes("DE SIMONE") ||
      question.includes("DI SIMONE")
    ) {
      setAnswer(
        "ATTUALMENTE È IL GIOCATORE PIÙ FORTE DI PALERMO E POSSEGGO ANCHE DEGLI STICKERS CHE LO TESTIMONIANO."
      );
    } else if (question.includes("CIPOLLA")) {
      setAnswer("NON LO CONOSCO BENISSIMO MA DICONO CHE FACCIA PIANGERE");
    } else if (question.includes("NAZARENO PARLATO ROVELLA")) {
      setAnswer(
        "E' IL GIOCATORE PIU' FORTE IN CIRCOLAZIONE IN ASSOLUTO, C'ERA DAVVERO BISOGNO DI CHIEDERLO?."
      );
    } else if (question.includes("MATTEO") || question.includes("STRAZZERA")) {
      setAnswer(
        "NON SONO IN GRADO DI FORNIRE UN'OPINIONE CHIARA SU QUESTO GIOCATORE, SICURAMENTE HA MOLTO TEMPO LIBERO. PUOI TROVARE PIU' INFO"
      );
    } else if (question.includes("NAZARENO ROVELLA")) {
      setAnswer(
        "E' IL SECONDO GIOCATORE PIU' FORTE IN CIRCOLAZIONE, C'ERA DAVVERO BISOGNO DI CHIEDERLO?"
      );
    } else if (question.includes("NAZARENO")) {
      setAnswer("POTREI LITIGARCI PER ORE");
    } else {
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
          {/*   LINK TO 104 PAGE TO SHOW JUST IN CASE OF UNKOWN PLAYER */}
          {!hideMe104 && (
            <div className="flex justify-center items-center gap-2 text-center">
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
          {/*   LINK TO 104 PAGE TO PORTFOLIO */}
          {!hideMePortfolio && (
            <div className="flex justify-center items-center gap-2 text-center">
              {icons.right}
              <p>
                <a
                  href="https://portfoliostrazzera.netlify.app/"
                  className="underline"
                  onClick={() => setHideMe104(true)}
                >
                  QUI
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
          INTERROGAMI ANCORA
        </button>
      </div>
    </div>
  );
}
