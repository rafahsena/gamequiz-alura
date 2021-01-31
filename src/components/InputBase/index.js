import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
  width: 90%;
  height: 2.5rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.mainBg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 12px;
  color: #fff;
  border-radius: 3.5px;
`;

const Input = ({ onChange, ...restProps }) => (
  <InputBase onChange={(e) => onChange(e.target.value)} {...restProps} />
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Input;
