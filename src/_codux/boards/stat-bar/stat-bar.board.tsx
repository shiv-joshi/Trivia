import { createBoard } from '@wixc3/react-board';
import StatBar from '../../../components/StatBar';

export default createBoard({
    name: 'StatBar',
    Board: () => <StatBar totalQuestions={1} currentQuestion={1} correct={0} incorrect={1}/>,
    isSnippet: true,
});
