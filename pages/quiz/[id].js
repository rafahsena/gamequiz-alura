import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import QuizScreen from '../../src/screens/Quiz';
import _db from '../../db.json';

export default function OtherQuizes({ db }) {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizScreen externalQuestions={db.questions} externalBg={db.bg} />
    </ThemeProvider>
  );
}

OtherQuizes.propTypes = {
  db: PropTypes.object.isRequired,
};

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');
  if (!projectName || !githubUser) {
    return {
      props: {
        db: _db,
      },
    };
  }

  try {
    const db = await fetch(
      `https://${projectName}.${githubUser}.vercel.app/api/db`,
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('An Error occurred when fetching.');
    });
    return {
      props: {
        db,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}
