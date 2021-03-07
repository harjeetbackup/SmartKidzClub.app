import styled from 'styled-components';
import v from 'styles/variables';

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #808080f2;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${v.zIndex.overlay};
  color: ${v.color.white};
`;

const Rotate = styled.span`
  margin-left: 10px;
  animation: spin 4s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadIcon = () => <Rotate>⌛</Rotate>;
