export default function Questionpage() {
  function answerMe(e) {
    e.preventDefault();
  }

  return (
    <form className="flex flex-col gap-2">
      <input type="text" placeholder="FAI LA TUA DOMANDA"></input>
      <input
        type="submit"
        value="submit"
        onClick={answerMe}
        className="cursor-pointer"
      />
    </form>
  );
}
