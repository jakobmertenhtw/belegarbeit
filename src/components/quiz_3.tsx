import QuizQuestion from "./quiz_question";

export default function Quiz3() {
  const quiz_questions: QuizQuestion[] = [
    {
      question:
        "Welche Fertigungsstrategie eignet sich am besten für standardisierte Produkte mit hoher Nachfrage?",
      options: [" Engineer to Order", "Make to Stock", "Assemble to Order"],
      correctAnswerIndex: [1],
    },
    {
      question:
        "Welche Strategie sollte angewandt werden, wenn ein Kunde ein Produkt von Grund auf entworfen haben möchte?",
      options: ["Make to Order", "Engineer to Order", "Configure to Order"],
      correctAnswerIndex: [1],
    },
    {
      question:
        "Welche Fertigungsstrategie kombiniert vorproduzierte Teile mit der Möglichkeit, diese nach Bestellung zusammenzustellen?",
      options: ["Assemble to Order", "Build to Order", "Make to Stock"],
      correctAnswerIndex: [0],
    },
    {
      question:
        "Ein Kunde möchte eine kleine Anpassung an einem bestehenden Produkt. Welche Strategie ist am besten geeignet?",
      options: ["Engineer to Order", "Configure to Order", "Make to Stock"],
      correctAnswerIndex: [1],
    },
    {
      question: "Welche Strategie hat die kürzesten Lieferzeiten?",
      options: ["Make to Stock", "Build to Order", "Engineer to Order"],
      correctAnswerIndex: [0],
    },
  ];

  return (
    <div className="quiz_container">
      <h3 className="paragraph_ueberschrift">
        Quiz: Teste dein Wissen zu den verschiedenen Fertigungsverfahren
      </h3>
      {quiz_questions.map((question, index) => (
        <QuizQuestion key={index} quiz={question} />
      ))}
    </div>
  );
}
