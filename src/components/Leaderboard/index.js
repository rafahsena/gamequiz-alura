import styled from 'styled-components';

const Leaderboard = styled.div`
  background: ${({ theme }) => theme.colors.mainBg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px;
`;

Leaderboard.Position = styled.div`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 8px 12px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  display: block;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Leaderboard;
