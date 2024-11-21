import questions from "./questions.js";

function FlashCards() {
    return (
        <div className="flashcards">{questions.map(question => (
            <div key={question.id}>
                <p>{question.question}</p>
            </div>
        ))}</div>
    )
}

export default FlashCards;