import { createBoard } from '@wixc3/react-board';
import QuestionComp from '../../../components/Question';

export default createBoard({
    name: 'QuestionComp',
    Board: () => <QuestionComp />,
    isSnippet: true,
});
