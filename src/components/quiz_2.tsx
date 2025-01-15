import QuizQuestion from "./quiz_question"


export default function Quiz2() {

    const quiz_questions: QuizQuestion[] = [
        {
            question: "Was beschreibt der Variationskoeffizient in der XYZ-Analyse?",
            options: [
                "Den Durchschnittsverbrauch eines Materials.",
                "Die Regelmäßigkeit des Verbrauchs.",
                "Die Kosten der Lagerhaltung."
            ],
            correctAnswerIndex: [1]
        },
        {
            question: "Welcher Type von Gütern hat den konstantesten Verbrauch?",
            options: [
                "X-Güter",
                "Y-Güter",
                "Z-Güter"
            ],
            correctAnswerIndex: [0]
        },
        {
            question: "Welche Maßnahmen würden Sie für Z-Güter empfehlen?",
            options: [
                "Just-in-Time Lieferungen",
                "Große Lagerbestände anlegen",
                "Regelmäßige Inventuren"
            ],
            correctAnswerIndex: [0]
        }, 
        {
            question: "Warum ist es sinnvoll, die XYZ-Analyse mit der ABC-Analyse zu kombinieren?",
            options: [
                "Um die Lagerhaltungskosten zu verdoppeln",
                "Um sowohl den Wert als auch die Verbrauchsschwankungen der Materialien zu berücsichtigen",
                "Um die Materialien nach Gewicht zu klassifizieren"
            ],
            correctAnswerIndex: [1]
        }
    ]


    return (
        <div className="quiz_container">
            <h3 className="paragraph_ueberschrift">Quiz zur XYZ-Analyse</h3>
            {quiz_questions.map((question, index) => (
                <QuizQuestion key={index} quiz={question} />
            ))}
        </div>
    )
}