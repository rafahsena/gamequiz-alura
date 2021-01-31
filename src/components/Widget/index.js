import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Input = styled.input`
  width: 90%;
  height: 2.5rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.mainBg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 12px;
  color: #fff;
  border-radius: 3.5px;
`;

Widget.Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

Widget.Button = styled.button`
background-color: ${({ theme }) => theme.colors.secondary};
color: ${({ theme }) => theme.colors.contrastText};
border-radius: ${({ theme }) => theme.borderRadius};
border: 0;

width: 100%;
padding: 10px 16px;
font-weight: bold;
font-size: 14px;
line-height: 1;
text-transform: uppercase;
outline: 0;
transition: .3s;
cursor: pointer;

&:hover,
&:focus {
  opacity: .5;
}

&:disabled {
  background-color: #979797;
  cursor: not-allowed;
}
`;

export default Widget;
