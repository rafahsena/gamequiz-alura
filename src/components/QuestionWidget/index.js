import { useState } from 'react';
import PropTypes from 'prop-types';
import Widget from '../Widget';
import Image from '../Image';
import AlternativesForm from '../AlternativesForm';

const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  AddResult,
}) => {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);
  const questionId = `question__${questionIndex}`;

  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  const onFormSubmit = (e) => {
    e.preventDefault();
    AddResult(isCorrect);
    setIsQuestionSubmitted(true);
    setTimeout(() => {
      setIsQuestionSubmitted(false);
      onSubmit();
    }, 3 * 1000);
  };

  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>

      <Image alt="Descrição" src={question.image} />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <AlternativesForm onSubmit={onFormSubmit}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const isSelected = selectedAlternative === alternativeIndex;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            return (
              <Widget.Topic
                key={alternativeId}
                as="label"
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmitted && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Widget.Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Widget.Button>
          {isQuestionSubmitted && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmitted && !isCorrect && <p>Você errou!</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
};

QuestionWidget.propTypes = {
  question: PropTypes.any.isRequired,
  questionIndex: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  AddResult: PropTypes.func.isRequired,
};

export default QuestionWidget;