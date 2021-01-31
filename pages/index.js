import { useRouter } from 'next/router';
import { useState } from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/InputBase';
import Link from '../src/components/Link';

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  const onNameSubmit = (e) => {
    e.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={(e) => onNameSubmit(e)}>
              <Widget.Container>
                <Input
                  value={name}
                  onChange={(newName) => setName(newName)}
                  placeholder="Diz aí seu nome pra gente!"
                />
                <Widget.Button type="submit" disabled={!name}>
                  Jogar!
                </Widget.Button>
              </Widget.Container>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            {db.external.map((quiz) => {
              const [quizName, githubUser] = quiz
                .replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app', '')
                .split('.');

              const quizUrl = `/quiz/${quizName}___${githubUser}`;
              return (
                <Widget.Topic
                  as={Link}
                  href={quizUrl}
                >
                  {`${githubUser}/${quizName}`}
                </Widget.Topic>
              );
            })}
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/rafahsena" />
    </QuizBackground>
  );
}
