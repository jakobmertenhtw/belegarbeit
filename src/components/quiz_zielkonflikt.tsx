import QuizQuestion from "./quiz_question"


export default function QuizZielkonflikt() {

    const quiz_questions: QuizQuestion[] = [
        {
            question: "Was versteht man unter einem niedrigen Lagerbestand?", 
            options: [
                "Es wird nur das notwendigste Material und die minimalen Fertigprodukte gelagert.", 
                "Es werden möglichst viele Materialien und Produkte auf Lager gehalten.",
                "Lagerbestände spielen keine Rolle"
            ], 
            correctAnswerIndex: [0]
        }, 
        {
            question: "Was ist ein Vorteil eines niedrigen Lagerbestands?", 
            options: [
                "Geringere Lagerhaltungskosten", 
                "Höhrere Kundenzufriedenheit durch schnelle Lieferungen.",
                "Höhere Flexibilität bei Nachfrageschwankungen."
            ], 
            correctAnswerIndex: [0]
        }, 
        {
            question: "Was bedeutet ein hoher Servicegrad?",
            options: [
                "Kundenaufträge werden immer zuverlässig und schnell erfüllt.",
                "Kunden müssen längere Lieferzeiten akzeptieren.",
                "Es werden keine Lagerbestände vorgehalten"
            ],
            correctAnswerIndex: [0]
        }, 
        {
            question: "Was ist ein Nachteil eines hohen Servicegrads?",
            options: [
                "Die Lagerhaltungskosten steigen.",
                "Die Lieferzeiten werden länger.",
                "Es gibt keine ausreichenden Bestände für Kundenaufträge."
            ], 
            correctAnswerIndex: [0]
        },
        {
            question: "Wie könnte ein Möbelhersteller den Zielkonflik lösen?",
            options: [
                "Einführung von Just-in-Time-Lieferungen",
                "Aufbau von großen Sicherheitsbeständen",
                "Einsatz eines Lagerverwaltungssystems zur Optimierung von Beständen.",
                "Keine Maßnahmen, der Zielkonflikt ist unvermeidbar."
            ], 
            correctAnswerIndex: [0, 2]
        }
    ]

        return (
            <div className="quiz_container">
                <h3 className="paragraph_ueberschrift">Quiz: Teste dein Wissen zum Zielkonflikt</h3>
                {quiz_questions.map((question, index) => (
                    <QuizQuestion key={index} quiz={question} />
                ))}
            </div>
        )
}