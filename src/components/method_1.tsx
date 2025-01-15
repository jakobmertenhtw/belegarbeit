import "../styles/styles.css";
import Image from 'next/image';


export default function Method1() {
  return (
    <div className="method_container">
      <div className="paragraph_container">
        <h3 className="paragraph_ueberschrift">Problemvorstellung</h3>
        <p className="paragraph">
          Unser Unternehmen hat festgestellt, dass die Lagerkosten steigen und
          die Lieferzeiten für wichtige Materialien unvorhersehbar geworden
          sind.
        </p>
        <p className="paragraph">
          Unser Unternehmen, Velare, verwendet eine Vielzahl von Materialien,
          darunter verschiedene Arten von Holz, Stoffe, Leder, Schrauben, Glas
          und vieles mehr.
        </p>
        <p className="paragraph">
          Die Leute, die in unserer Firma für den Einkauf zuständig sind, haben
          Schwierigkeiten, ihre Ressourcen auf die wichtigsten Materialien zu
          konzentrieren, da alle Materialien als “gleich wichtig” eingeordnet
          werden. Das führt zu überfüllten Lagern, zu Fehlbeständen bei
          wichtigen Materialien, wie Holz und zu steigenden Lager- und
          Beschaffungskosten.
        </p>
      </div>
      <div className="paragraph_container">
        <h3 className="paragraph_ueberschrift">Methode: ABC-Analyse</h3>
        <div className="dividing_container">
          <div className="dividing_element">
            <p className="paragraph">
              Die ABC-Analyse ist eine Methode zur Priorisierung von Materialien
              basierend auf der Wichtigkeit für die Produktion. Die ABC-Analyse
              teilt die Materialien in drei Klassen ein:
            </p>
            <p className="paragraph">
              1. Klasse A: wenig Objekte mit hohem Wertanteil (75 Prozent des
              Gesamtwerts) <br />
              2. Klasse B: Mittlere Anzahl von Objekten mit mittlerem Wertanteil
              (20 Prozent des Gesamtwerts) <br />
              2. Klasse C: Viele Objekte mit geringem Wertanteil (5 Prozent des
              Gesamtwerts)
            </p>
            <p className="paragraph">
              Um eine ABC Analyse durchführen zu können müssen folgende Schritte
              durchgeführt werden: <br />
              1. Daten sammeln: Materialkosten und Verbrauchsmengen für einen
              Zeitraum erfassen. <br />
              2. Wert berechnen: Der Jahresverbrauchswert für jedes Material
              berechnen. <br />
              3. Sortieren: Materialien nach ihrem Jahresverbrauchswert
              absteigend ordnen. <br />
              4. Kumulierter Anteil: Den kumulierten Anteil des Werts berechnen
              und die Materialien in A,B,C unterteilen. <br />
            </p>
          </div>
          <div className="dividing_element">
            <img src="/images/ABC.png" alt="Abbild ABC-Analyse" className="image_element" />
          </div>
        </div>
      </div>
    </div>
  );
}
