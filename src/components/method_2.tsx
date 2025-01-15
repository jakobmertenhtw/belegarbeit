export default function Method2() {
  return (
    <div className="method_container">
      <div className="paragraph_container">
        <h3 className="paragraph_ueberschrift">Problemvorstellung</h3>
        <p className="paragraph">
          Unser Unternehmen, Velare, hat festgestellt, dass die Lagerkosten
          erheblich gestiegen sind. Um die Kostentreiber zu identifizieren und
          die Lagerbestände effizient zu nutzen, wollen wir das Problem jetzt
          gemeinsam angehen. Das Ziel ist es, herauszufinden, welche Materialien
          im Lager besonders im Verbrauch schwanken und wie das besser
          organisiert werden kann.
        </p>
        <p className="paragraph">
          Hintergrundinformationen: Wir stellen Esstische, Stühle, Schränke,
          Betten und weitere Möbelstücke her. Es werden verschiedene
          Materialien, wie Holz, Metal, Leder, Schrauben verwendet. Einige
          Materialien werden sehr regelmäßig gebraucht, andere nur bei
          besonderen Aufträgen.
        </p>
        <p className="paragraph">
          Das Problem ist, dass es immer wieder Engpässe bei bestimmten
          Materialien gibt, während andere Materialien über Monate ungenutzt
          herumliegen. Diese führt zu hohen Lagerkosten und manchmal auch zu
          Produktionsengpässen.
        </p>
      </div>
      <div className="paragraph_container">
        <h3 className="paragraph_ueberschrift">XYZ-Analyse</h3>
        <div className="dividing_container">
          <div className="dividing_element">
            <p className="paragraph">
              Die XYZ-Analyse ist eine Methode, mit der Materialien oder
              Produkte anhand ihrer Verbrauchsschwankungen kategorisiert werden.
              Ziel ist es, besser zu verstehen, wie regelmäßig ein Material oder
              Produkt verbraucht wird, und darauf basierend geeignete Lager- und
              Beschaffungsstrategien zu entwickeln. <br />
              X-Güter: Haben einen konstanten und vorhersehbaren Verbrauch{" "}
              <br />
              Y-Güter: Haben mittelstarke Verbrauchsschwankungen, die oft
              saisonal oder trendbedingt sind. <br />
              Z-Güter: Haben unregelmäßigen und schwer vorhersagbaren Verbrauch{" "}
              <br />
              Durch eine Einteilung in diese Kategorien können gezielte
              Maßnahmen ergriffen werden, z.B. für die Beschaffung, Lagerhaltung
              oder Produktionsplanung.
            </p>
          </div>
          <div className="dividing_element">
            <img src="/images/XYZ.png" alt="Abbild XYZ Analyse" className="image_element" />
          </div>
        </div>
      </div>
    </div>
  );
}
