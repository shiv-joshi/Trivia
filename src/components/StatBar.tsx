import StatBar_module from './StatBar.module.scss';// props are the input to a component
type Props = {
    currentQuestion: number;
    totalQuestions: number;
    correct: number;
    incorrect: number;
}

function StatBar(props: Props) {
    return <div className={StatBar_module['stat-container']}>
        <p>Questions: {props.currentQuestion}/{props.totalQuestions}</p>
        <p>Correct: {props.correct}</p>
        <p>Incorrect: {props.incorrect}</p>
    </div>
}

// makes it available outisde of this particular file
export default StatBar;