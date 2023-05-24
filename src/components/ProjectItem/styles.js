import { styled } from 'styled-components';
import { colors } from '../../styles';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  background-color: ${colors.darkBlue};
  cursor: pointer;

  > img {
    height: 160px;
    width: 100%;
    margin-bottom: 16px;
  }

  h3 {
    color: ${colors.white};
    font-weight: 400;
  }

  h3:hover {
    font-weight: 500;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
export const ModalContent = styled.div`
  z-index: 1;

  position: relative;
  .imgClose {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }

  .imgProject {
    height: 512px;
    width: 100%;
  }

  > h3 {
    color: ${colors.white};
    margin: 8px 0;
    font-weight: 300;
    font-size: 24px;
  }

  > a {
    color: ${colors.white};
    font-size: 40px;
  }
`;
