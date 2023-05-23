import { styled } from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height:100%:
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ModalContent = styled.div`
  //   position: absolute;
  // height:10%:
  //   width:100%;

  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;

  margin-top: 128px;

  img {
    height: 160px;
    width: 100%;
  }
`;
