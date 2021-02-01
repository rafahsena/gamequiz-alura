import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Widget from '../Widget';
import Leaderboard from '../Leaderboard';

const ResultsWidget = ({ results }) => {
  const { query } = useRouter();

  return (
    <Widget>
      <Widget.Header>Resultado</Widget.Header>

      <Widget.Content>
        <p>{`Mandou bem, ${query.name}!`}</p>
        <h4>
          {`Você fez ${
            results.filter((result) => result).length
          } pontos, parabéns!`}
        </h4>
        <ul>
          {results.map((result, index) => (
            <li key={index + 1}>
              {`Pergunta #${index + 1}: ${result ? 'Acertou' : 'Errou'}`}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
};

ResultsWidget.propTypes = {
  results: PropTypes.array.isRequired,
};

export default ResultsWidget;