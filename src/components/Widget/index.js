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
  display: block;
  height: 2.5rem;
  width: 15rem;
  font-family: 'Lato';
  color: #fff;
  line-height: 16px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
`;

export default Widget;
