import questions from "./questions.js";
import {useState} from "react";

function FlashCards() {
    const [selectedId, setSelectedId] = useState(null);
    return (
        <div className="flashcards">{questions.map(question => (
            <div
                key={question.id}
                className={question.id === selectedId ? 'selected' : ''}
                onClick={()=>setSelectedId(question.id)}>
                <p>
                    {question.id === selectedId ? question.answer : question.question}
                </p>
            </div>
        ))}</div>
    )
}

export default FlashCards;