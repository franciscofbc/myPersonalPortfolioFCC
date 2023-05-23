import { styled } from 'styled-components';
import { colors } from '../../styles';

export const Content = styled.div`
  background-color: ${colors.darkBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  //   justify-content: center;
  justify-content: center;

  height: 516px;
  border-bottom: 4px solid ${colors.red};
`;
