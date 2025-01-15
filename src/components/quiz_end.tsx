

export default function QuizEnd({ end_function }: { end_function?: () => void }) {
    return (
        <div className="method_container">
            <div className="paragraph_container">
                <h3 className="paragraph_ueberschrift">Ende vom E-Learning</h3>
                <p className="paragraph">
                    Herzlichen Glückwunsch! Sie haben das Quiz erfolgreich abgeschlossen.
                </p>
                <button className="finish_button" onClick={end_function}>Beenden</button>
            </div>
        </div>
    )
}