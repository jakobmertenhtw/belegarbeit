import QuizQuestion from "./quiz_question"


export default function Quiz1() {

    const quiz_questions: QuizQuestion[] = [
        {
            question: "Welche Kategorien sollten in der A-Kategorie landen?",
            options: [
                "Materialien mit den höchsten Jahresverbrauchswerten.",
                "Materialien mit den höchsten Verbrauchsmengen.",
                "Materialien, die am meisten Platz im Lager einnehmen.",
            ],
            correctAnswerIndex: [0]
        }, 
        {
            question: "Was ist ein typisches Verhältnis von Materialien in den ABC-Kategoories?",
            options: [
                "10% A, 20% B, 70% C",
                "20% A, 30% B, 50% C",
                "75% A, 20% B, 5% C"
            ], 
            correctAnswerIndex: [0]
        }, 
        {
            question: "Warum ist die ABC-Analyse wichtig?", 
            options: [
                "Um die Kosten des Einkaufs zu reduzieren.", 
                "Um alle Materialien gleich zu behandeln.",
                "Um die Lagerfläche zu maximieren."
            ], 
            correctAnswerIndex: [0]
        }, 
        {
            question: "Was sollte mit den C-Materialien geschehen?", 
            options: [
                "Sie sollten priorisiert werden.",
                "Sie sollten auf ein Minimum reduziert werden.",
                "Sie sollten zusammen mit den A-Materialien verwaltet werden.",
            ],
            correctAnswerIndex: [1]
        },
        {
            question: "Welche der folgednen Aussagen ist korrekt?",
            options: [
                "A-Materialien haben oft einen hohen Einfluss auf die Kosten, obwohl sie in geringer Menge benötigt werden.",
                "B-Materialien sind unwichtig und können ignoriert werden.",
                "C-Materialien machen den Großteil der Kosten aus."
            ], 
            correctAnswerIndex: [0]
        }
    ]


    return (
        <div className="quiz_container">
            <h3 className="paragraph_ueberschrift">Quiz: Teste dein Wissen zur ABC-Analyse</h3>
            {quiz_questions.map((question, index) => (
                <QuizQuestion key={index} quiz={question} />
            ))}
        </div>
    )
}