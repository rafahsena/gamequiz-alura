import db from '../../db.json';
import QuizPage from '../../src/screens/Quiz';

const Quiz = () => <QuizPage externalBg={db.bg} externalQuestions={db.questions} />;

Quiz.propTypes = {};

export default Quiz;
