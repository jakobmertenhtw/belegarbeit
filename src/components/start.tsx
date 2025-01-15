export default function Start({
  start_function,
}: {
  start_function?: () => void;
}) {
  return (
    <div className="method_container">
      <p className="paragraph">
        Im Folgenden wirst du drei wichtige Methoden der Logistik kennenlernen,
        die in der Praxis angewendet werden: die ABC-Analyse, die XYZ-Analyse
        und die Einteilung in verschiedene Fertigungsstrategien.
      </p>
      <p className="paragraph">
        Damit es nicht nur bei der Theorie bleibt, gibt es zwischendurch
        Quiz-Fragen, mit denen du dein Wissen testen kannst. Die Aufgaben helfen
        dir, die Methoden direkt anzuwenden und zu verstehen, warum sie so
        wichtig sind.
      </p>
      <p className="paragraph">
        Ein weiteres Thema, das wir uns anschauen, ist der Zielkonflikt
        zwischen einem niedrigen Lagerbestand und einem hohen Servicegrad. <br />
        Viel Spaß dabei!
      </p>
      <button className="start_btn" onClick={start_function}>
        Quiz Starten
      </button>
    </div>
  );
}
