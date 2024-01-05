import { useState, useEffect } from "react";
import { Question } from "../types";
import Answer from "./Answer";
import Answers_module from './Answers.module.scss';

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void;
}
function Answers(props: Props) {
    // initially showAnswer is set to false
    const [showAnswer, setShowAnswer] = useState(false);
    // changes showAnswer when props.question changes
    useEffect(() => { 
        setShowAnswer(false);
    }, [props.question]);

    /* when you press answer choice, it calls this function with index of choice and shows correct answers,
        it also calls onSubmit function with true/false if they got answer correct */
    const onPress = (idx: number) => {
        setShowAnswer(true);
        props.onSubmit(props.question.correctAnswerIdx === idx);
    }

    return (
        <div className={Answers_module.choices}>
            {/* map through the choices and get both the choice and its index */}
            {props.question.choices.map((choice, idx) => {
                let color = ""
                if (showAnswer && props.question.correctAnswerIdx === idx) color = 'green';
                else if (showAnswer) color = 'red';

                return (
                    <Answer
                        text={choice}
                        onPress={() => onPress(idx)}
                        color={color}
                        disabled={showAnswer}
                        key={idx}
                    />
                );
            })}
        </div>
    );
}

export default Answers;